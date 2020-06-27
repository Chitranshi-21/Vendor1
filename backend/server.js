import express from 'express';
import data from './data';
import user from './routes/userRoute';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

app.use(bodyParser.json());


app.get("/api/products", (req, res) => {
  res.send(data.products);
})
app.use('/api/users', user);

app.use(express.static(path.join(__dirname, '/../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(5000, () => {
  console.log('Server started at http://localhost:5000');
});