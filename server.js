const express = require('express');
const compression = require('compression');
const path = require('path');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const ms = require('ms');

const projectData = require('./data/project.data');
const pingController = require('./ping/ping.controller');

const app = express();
app.use(bodyParser.json())
app.use(compression());

let port = process.env.PORT || 4200;

const keepAwake = false;
const pingPrimary = false;
const pingSecondary = false;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/data/projects', (req, res) => {
  res.status(200).send(projectData);
});

app.post('/ping', (req, res) => {
  const {type} = req.body;

  if (type === 'primary' && pingPrimary) {
    pingController.pingPrimaryProjects();
    res.status(200).send('Primary Projects Promptly Pinged');
  } else if (type === 'secondary' && pingSecondary) {
    pingController.pingSecondaryProjects();
    res.status(200).send('Secondary Projects Promptly Pinged');
  } else {
    res.status(200).send('Ping service is switched off');
  }
});

app.get('/*', (req, res) => {
  res.redirect('/');
  // res.status(200).sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, () => {
  console.log(chalk.green('API Running on Port ' + port));
});

if (keepAwake) {
  setInterval(function() {
    pingController.pingSelf();
  }, ms('1hr'));
}