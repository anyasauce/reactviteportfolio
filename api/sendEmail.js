import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,  // Your email
                pass: process.env.EMAIL_PASS,  // Your email password or app password
            },
        });

        const mailOptions = {
            from: email,
            to: 'josiahdanielle09gallenero@gmail.com',
            subject: `Message from ${name}`,
            text: `You have received a new message from ${name} (${email}):\n\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ message: 'Failed to send message', error: error.message });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
