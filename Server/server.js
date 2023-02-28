import dotenv from 'dotenv';
import helmet from 'helmet';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute');
const contactRoute = require('./routes/contactRoute');
const errorHandler = require('./middleWare/errorMiddleware');
const cookieParser = require('cookie-parser');
dotenv.config();

const path = require('path');
const app = express();
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
const { FRONTEND_URL, MONGO_URI, DB_Message, PORT } = process.env;

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(
  cors({
    origin: [FRONTEND_URL],
    credentials: true,
  })
);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes Middleware
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/contactus', contactRoute);

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Error Middleware
app.use(errorHandler);

// Connect to DB and start server
mongoose.set('strictQuery', false);

const port = PORT || 5000;
const msg = DB_Message || 'DB ? ';
mongoose.set('strictQuery', false);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(msg);
    app.listen(port, () => {
      console.log(`Server Running on port 🚀 ${port}`);
    });
  })
  .catch(err => console.log(`${err} did not connect`));
