import  bcrypt from 'bcryptjs';
import fs from 'fs';
import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add a email'],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please enter a valid email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minLength: [6, 'Password must be up to 6 characters'],
      //   maxLength: [23, "Password must not be more than 23 characters"],
    },
    photo: {
      type: String,
      required: [true, 'Please add a photo'],
      default: base64Encode('./uploads/mario.jpg'),
    },
    phone: {
      type: String,
      default: '123-123-1234',
    },
    bio: {
      type: String,
      maxLength: [250, 'Bio must not be more than 250 characters'],
      default: 'bio',
    },
  },
  {
    timestamps: true,
  }
);

// node does not recognize jpeg extension, adding this code to fix bug
function base64Encode(file) {
  const bitmap = fs.readFileSync(file);
  return `data:image/jpeg;base64,${Buffer.from(bitmap).toString('base64')}`;
}
//   Encrypt password before saving to DB
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

const User = mongoose.model('User', userSchema);
export default User;
