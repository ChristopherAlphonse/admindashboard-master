import bodyParser from 'body-parser';
import contactRoute from './routes/contactRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import path from 'path';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';
dotenv.config();

const { FRONTEND_URL, MONGO_URI, DB_Message, PORT } = process.env;

const app = express();
const port = PORT || 5000;
const dbMessage = DB_Message || 'DB ?';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: [ FRONTEND_URL],
  credentials: true,
  
  
}));



app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/contactus', contactRoute);
app.get('/', (req, res) => {
  res.status(200).send(`
  <div style="display: flex;
   justify-content: center;
    align-items: center; 
    height: 100vh;">
  <h1>INVENT API</h1>
</div>

`);
});



app.use(morgan('dev'));


// Connect to DB and start server
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
 
  })
  .then(() => {
    console.log(dbMessage);
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server Running on port 🚀 ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
