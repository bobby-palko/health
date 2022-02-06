/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import mongoose from 'mongoose';
import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || '';

mongoose
  .connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

export default db;
