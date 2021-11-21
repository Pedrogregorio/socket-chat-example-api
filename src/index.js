import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 3000;
app.listen(port, () => { console.log(`Listening on port ${port}`); });