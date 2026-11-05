import { NextRequest, NextResponse } from 'next/server';

function escapeHtml(text: string = ''): string {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, answers, writing } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    if (!answers || !Array.isArray(answers) || answers.length !== 5) {
      return NextResponse.json(
        { error: 'All 5 questions must be answered.' },
        { status: 400 }
      );
    }

    if (!writing?.trim() || writing.trim().length < 20) {
      return NextResponse.json(
        { error: 'Writing section must be at least 20 characters.' },
        { status: 400 }
      );
    }

    const token =
      process.env.TELEGRAM_BOT_TOKEN ||
      '9242587113:AAFCOh56qDI7M45gy4RnJ2Z4zO7lfr8xJRs';
    const chatId = process.env.TELEGRAM_CHAT_ID || '9246073855';

    const questions = [
      {
        q: 'Choose the correct word: I __ a student.',
        options: ['am', 'is', 'are'],
        correct: 'am',
      },
      {
        q: 'Choose the correct word: She __ to school every day.',
        options: ['go', 'goes', 'going'],
        correct: 'goes',
      },
      {
        q: 'Write the opposite of the word "big".',
        type: 'text',
        accept: ['small', 'little', 'tiny'],
      },
      {
        q: 'Put these words in the correct order: English / learning / I / am',
        type: 'text',
        accept: ['i am learning english'],
      },
      {
        q: 'What is your favorite subject at school?',
        type: 'text',
        freeform: true,
      },
    ];

    // Score Part A
    let partAScore = 0;
    const answerDetails: string[] = [];

    for (let i = 0; i < 5; i++) {
      const q = questions[i];
      const userAnswer = String(answers[i] || '').trim();
      let isCorrect = false;

      if (q.freeform) {
        isCorrect = userAnswer.length > 0;
      } else if (q.correct) {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
      } else if (q.accept) {
        isCorrect = q.accept.some(
          (a) => userAnswer.toLowerCase() === a.toLowerCase()
        );
      }

      if (isCorrect) partAScore++;

      const mark = isCorrect ? '✅' : '❌';
      answerDetails.push(
        `${mark} Q${i + 1}: ${escapeHtml(userAnswer || '(no answer)')}`
      );
    }

    const nowTime = new Date().toLocaleString('en-GB', {
      timeZone: 'Asia/Dhaka',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const lines: string[] = [
      '📝 <b>NEW LEVEL ASSESSMENT SUBMISSION</b>',
      '🏛 <b>Cambridge Academic Centre Chittagong</b>',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '',
      `👤 <b>Student Name:</b> ${escapeHtml(name.trim())}`,
      `📞 <b>Phone:</b> <a href="tel:${escapeHtml(phone.trim())}">${escapeHtml(phone.trim())}</a>`,
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      `📋 <b>PART A — Five Questions (${partAScore}/5)</b>`,
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '',
      ...answerDetails,
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '✏️ <b>PART B — Short Writing</b>',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      '',
      `<i>"${escapeHtml(writing.trim())}"</i>`,
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      `📊 <b>AUTO-SCORE:</b> Questions: ${partAScore}/5 | Writing: Pending Evaluation`,
      `🕐 <b>Submitted:</b> ${nowTime} (BST)`,
      `🌐 <b>Source:</b> Online Level Assessment Form`,
      '',
      '⏳ <i>Instructor evaluation pending — respond within 72 hours via WhatsApp/call.</i>',
    ];

    const text = lines.join('\n');

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      }
    );

    if (!telegramRes.ok) {
      const errText = await telegramRes.text();
      console.error('Telegram API error:', errText);
      return NextResponse.json(
        { error: 'Failed to submit assessment. Please try again or call us.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      partAScore,
    });
  } catch (err: any) {
    console.error('Assessment API error:', err);
    return NextResponse.json(
      { error: 'Internal server error.', details: err?.message },
      { status: 500 }
    );
  }
}

