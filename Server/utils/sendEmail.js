import nodemailer from 'nodemailer';

const {EMAIL_HOST, EMAIL_PASS,EMAIL_USER}=process.env;

const sendEmail = async (subject, message, sendTo, sentFrom, replyTo) => {
  try {
    // Create Email Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: EMAIL_HOST,
      secure: false,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
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
    transporter.sendMail(options, function(error, info){
      if (error) {
     console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        // do something useful
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
