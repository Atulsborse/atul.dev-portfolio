require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email endpoint
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // false for TLS
    auth: {
      user: process.env.EMAIL_USER, // Authenticated user email
      pass: process.env.EMAIL_PASS, // App password or regular Gmail password
       
    },
    logger: true, // Enable logging
    debug: true,  // Enable debugging
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Authenticated user email
    to:process.env.To, // Recipient email

    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    // Check for detailed error codes here
    if (error.response) {
      console.error('Detailed error response:', error.response);
    }
    res.status(500).send('Error sending email.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
