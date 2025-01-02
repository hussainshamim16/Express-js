const express = require('express');
const app = express();
const PORT = 3000;
const nodemailer = require('nodemailer');

// Import the nodemailer package

// Step 1: Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail service
  auth: {
    user: 'hj422748@gmail.com', // Replace with your Gmail address
    pass: 'your-email-password', // Replace with your Gmail app password
  },
});

// Step 2: Set up email options
const mailOptions = {
  from: 'your-email@gmail.com', // Sender's email
  to: 'recipient-email@example.com', // Recipient's email
  subject: 'Hello from Nodemailer!', // Email subject
  text: 'This is a test email sent using Nodemailer. Hope you find it helpful!', // Email body (text)
};

// Step 3: Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});



app.get("/", (req, res) => {
    console.log("hello Hussain")
})



app.listen(PORT, () => {
    console.log(`port is working at ${PORT}`)
})