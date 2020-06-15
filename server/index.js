const express = require('express');
const cors = require('cors');

const users = require('./users.json');
const app = express();

app.use(cors());

app.get('/users', (req, res) => {
  res.json(
    users.results.map(({ login, name: { title, first, last } }) => ({
      id: login.uuid,
      name: `${title} ${first} ${last}`,
    })),
  );
});

app.get('/users/:id', (req, res) => {
  res.json(users.results.find((user) => user.login.uuid === req.params.id));
});

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.get('*', (req, res) => {
  res.send('<h3>404</h3>');
});

app.listen(3000, () => console.log('Listening on port 3000...'));
