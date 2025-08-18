// /api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'josiahdanielle09gallenero@gmail.com',
            pass: 'lbyxbkvctgowkood',
        },
    });

    const mailOptions = {
        from: email,
        to: 'josiahdanielle09gallenero@gmail.com',
        subject: `Message from ${name}`,
        text: `You have received a new message:\n\nFrom: ${name} <${email}>\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email send failed:', error);
        return res.status(500).json({ message: 'Failed to send message', error: error.message });
    }
}
