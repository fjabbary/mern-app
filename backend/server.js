import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

const app = express();
dotenv.config();

console.log(process.env.MONGO_URI);

console.log('changes from branch1');
alert('changes from branch1');

function add(a,b) {
  return a+b;
}

add(3,5)

app.listen(5000, () => {
  connectDB();
  console.log('Server started at http://localhost:5000');
});


