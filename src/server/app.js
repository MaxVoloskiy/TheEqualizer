import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes/api';
import dbConnect from './helpers/database';

dotenv.config();

const app = express();
const { PORT } = process.env;

app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../../dist')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.get('/main', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

routes(app);

app.listen(PORT, () => {
  dbConnect();
});
