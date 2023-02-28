import bodyParser from 'body-parser';
import contactRoute from './routes/contactRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorMiddleware.js';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import path from 'path';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';

dotenv.config();

const { FRONTEND_URL, MONGO_URI, DB_Message, PORT } = process.env;

const app = express();
const port = PORT || 5000;
const dbMessage = DB_Message || 'DB ?';

// Middleware
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/contactus', contactRoute);
app.get('/', (req, res) => {
  res.send('Home Page');
});


// mongoose.set('strictQuery', false);
// Error Middleware
app.use(errorHandler);

// Connect to DB and start server
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(dbMessage);
    app.listen(port, () => {
      console.log(`Server Running on port 🚀 ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
