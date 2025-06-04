import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Message from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
        });

        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({ message: 'Failed to send email', error: error.message });
    }
}
