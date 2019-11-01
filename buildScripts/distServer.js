import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  // Hard coded for testing
  res.json([
    { "id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@sample.org" },
    { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@sample.org" },
    { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "tinal@sample.org" },
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    open ('http://localhost:' + port);
  }
});
