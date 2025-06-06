
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;
const axios = require('axios');
require('dotenv').config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'josiahdanielle09gallenero@gmail.com',
        pass: 'idvq gvjg pzsa rvbi',
    },
});

app.post('/api/sendEmail', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'josiahdanielle09gallenero@gmail.com',
        subject: `Message from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Failed to send message', error: error.message });
        }
        return res.status(200).json({ message: 'Message sent successfully!' });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


async function fetchWakaTimeStats() {
  try {
    const response = await axios.get(
      'https://wakatime.com/api/v1/users/current/stats/last_year',
      {
        headers: {
          Authorization: `Bearer ${process.env.WAKATIME_API_KEY}`,
        },
      }
    );

    const total = response.data.data.human_readable_total;
    return total;
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error.response?.data || error.message);
    return null;
  }
}

// Example usage:
fetchWakaTimeStats().then((total) => {
  console.log(`Last year, you coded for: ${total}`);
});