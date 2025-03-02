import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

const app = express();
dotenv.config();

console.log(process.env.MONGO_URI);


app.listen(5000, () => {
  connectDB();
  console.log('Server started at http://localhost:5000');
});


