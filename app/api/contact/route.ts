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
    const {
      formType = 'inquiry',
      name,
      phone,
      email,
      course,
      batchTiming,
      englishLevel,
      message,
    } = body;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    const token =
      process.env.TELEGRAM_BOT_TOKEN ||
      '9242587113:AAFCOh56qDI7M45gy4RnJ2Z4zO7lfr8xJRs';
    const chatId = process.env.TELEGRAM_CHAT_ID || '9246073855';

    if (!token || !chatId) {
      console.error('Telegram bot token or chat ID is not configured.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const isAdmission = formType === 'admission';
    const nowTime = new Date().toLocaleString('en-GB', {
      timeZone: 'Asia/Dhaka',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const lines: (string | null)[] = [
      isAdmission
        ? '🎓 <b>NEW ADMISSION APPLICATION</b>'
        : '📩 <b>NEW COURSE ENQUIRY</b>',
      '🏛 <b>Cambridge Academic Centre Chittagong</b>',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      `👤 <b>Name:</b> ${escapeHtml(name.trim())}`,
      `📞 <b>Phone:</b> <a href="tel:${escapeHtml(phone.trim())}">${escapeHtml(phone.trim())}</a>`,
      email?.trim() ? `📧 <b>Email:</b> ${escapeHtml(email.trim())}` : null,
      course ? `📚 <b>Course:</b> ${escapeHtml(course)}` : null,
      isAdmission && batchTiming ? `⏰ <b>Preferred Batch:</b> ${escapeHtml(batchTiming)}` : null,
      isAdmission && englishLevel ? `🎯 <b>Level / Background:</b> ${escapeHtml(englishLevel)}` : null,
      message?.trim()
        ? `💬 <b>${isAdmission ? 'Notes / Questions' : 'Message'}:</b>\n${escapeHtml(message.trim())}`
        : null,
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      `🕐 <b>Time:</b> ${nowTime} (BST)`,
      `🌐 <b>Source:</b> ${isAdmission ? 'Online Admission Form' : 'Course Enquiry Form'}`,
    ];

    const text = lines.filter(Boolean).join('\n');

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
      const isUnstarted = errText.includes("can't initiate conversation with a user");
      return NextResponse.json(
        {
          error: isUnstarted
            ? 'The Telegram bot (@cac121bot) has not been started yet. Please open @cac121bot in Telegram and tap Start.'
            : 'Failed to send message via Telegram.',
          details: errText,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { error: 'Internal server error.', details: err?.message },
      { status: 500 }
    );
  }
}
