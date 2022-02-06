import express from 'express';
import cors from 'cors';
import router from './routes/router';
import db from './db/index';

const app = express();
const port = 3001;

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connetion error:'));

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
