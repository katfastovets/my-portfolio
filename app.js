const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/form', function (req, res) {
  const {name, age, color} = req.query;
  res.send(`Your cat's name is ${name}, he is ${age} years old and his color is ${color}`);
  console.log(req);
})