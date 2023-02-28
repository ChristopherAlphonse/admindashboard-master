import Joi from 'joi';
import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import  sendEmail from '../utils/sendEmail.js';

const {EMAIL_USER}=process.env;

const contactUsSchema = Joi.object({
  subject: Joi.string().required(),
  message: Joi.string().required(),
});

const contactUs = asyncHandler(async (req, res) => {
  const { error, value } = contactUsSchema.validate(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }
  const { subject, message } = value;

  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(400);
    throw new Error('User not found, please signup');
  }

  const send_to = EMAIL_USER;
  const sent_from = EMAIL_USER;
  const reply_to = user.email;
  try {
    await sendEmail(subject, message, send_to, sent_from, reply_to);
    res.status(200).json({ success: true, message: 'Email Sent' });
  } catch (error) {
    res.status(500);
    throw new Error('Email not sent, please try again');
  }
});

export default contactUs;
