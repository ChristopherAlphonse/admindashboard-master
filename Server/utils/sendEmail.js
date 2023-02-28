import nodemailer from 'nodemailer';

const sendEmail = async (subject, message, sendTo, sentFrom, replyTo) => {
  try {
    // Create Email Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: process.env.EMAIL_HOST,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Option for sending email
    const options = {
      from: sentFrom,
      to: sendTo,
      replyTo: replyTo,
      subject: subject,
      html: message,
    };

    // Send email
    const info = await transporter.sendMail(options);

    // Log success message
    console.log('Email sent:', info.response);
  } catch (error) {
    // Handle error
    console.error(error);
  }
};

export default sendEmail;
