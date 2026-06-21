import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, course, message } = body;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error('Telegram env vars not set.');
      return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
    }

    const text = [
      '📩 *New Enquiry — Cambridge Academic Centre*',
      '',
      `👤 *Name:* ${name}`,
      `📞 *Phone:* ${phone}`,
      email ? `📧 *Email:* ${email}` : null,
      course ? `📚 *Course Interest:* ${course}` : null,
      message ? `💬 *Message:*\n${message}` : null,
      '',
      `🕐 *Time:* ${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka' })}`,
    ]
      .filter(Boolean)
      .join('\n');

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: 'Markdown',
        }),
      }
    );

    if (!telegramRes.ok) {
      const err = await telegramRes.text();
      console.error('Telegram API error:', err);
      return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
