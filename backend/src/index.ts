import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(express.json());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.get('/api/health', (req, res) => {
  res.send({ status: 'ok' });
});

app.listen(process.env.PORT, () => {
  console.log(`Backend running on http://localhost:${process.env.PORT}`);
});