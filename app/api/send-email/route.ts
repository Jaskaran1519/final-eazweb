import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const { email, phoneNumber, purpose } = await request.json();

    try {
        await resend.emails.send({
            from: 'Eazweb <onboarding@resend.dev>',
            to: ['eazwebcreates@gmail.com'],
            subject: 'New Contact Form Submission',
            html: `<p>New contact form submission from: ${email} and ${phoneNumber} with purpose ${purpose}</p>`
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
