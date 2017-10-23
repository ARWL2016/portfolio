const express = require('express');
const compression = require('compression');
const path = require('path');
const chalk = require('chalk');
const https = require('https');

const app = express();
app.use(compression());

let port = process.env.PORT || 4200;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', (req, res) => {
  res.redirect('/');
  // res.status(200).sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log(chalk.green('API Running on Port ' + port));
});

setInterval(function() {
  // Wake up Heroku apps
  https.get("https://alistair-willis.herokuapp.com/");
  https.get("https://votogo.herokuapp.com/home");
  https.get("https://arwl-book-exchange.herokuapp.com/browse");
  https.get("https://arwl-stock-tracker.herokuapp.com/main");
  https.get("https://calculator-arwl.herokuapp.com/");
  https.get("https://arwl-noughts-and-crosses.herokuapp.com/");
  https.get("https://arwl-game-of-life.herokuapp.com/");
}, 1000 * 60 * 60);
