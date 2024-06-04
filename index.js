const express = require('express');
const app = express();

app.get('/api/v1/welcome', (req, res) => {
  res.send('Hola mundo!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});