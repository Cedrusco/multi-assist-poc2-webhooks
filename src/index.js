require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;


app.post('/multi-assist-pre-webhook', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.post('/multi-assist-post-webhook', (req, res) => {
  console.log(req.body)
  res.json(req.body);
});

app.get('/', (req, res) => {
  res.send('hi hi');
});

app.listen(port, () => {
  console.log(`app listening at https://localhost:${port}`);
})