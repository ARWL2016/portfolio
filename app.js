const express = require('express');
const compression = require('compression');
const path = require('path');
const chalk = require('chalk');

const app = express();
app.use(compression());

let port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.redirect('/');
  // res.status(200).sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(port, () => {
  console.log(chalk.green('API Running on Port ' + port));
})
