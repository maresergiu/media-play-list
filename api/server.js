const express = require('express'),
  fetch = require('node-fetch'),
  path = require('path');

require('dotenv').config();

const app = express();

// reasons why I have created this API:
// - to simulate a real development env
// - to overcome the CORS problem that the openwhyd API brings

app.listen(process.env.API_PORT, () => console.log(`Server Running on ${process.env.API_PORT}!`))

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('server is running'));

app.get("/api/login", (req, res, next) => {
  const url = `https://openwhyd.org/login?action=login&ajax=true&${process.env.LOG_IN_EMAIL}&${process.env.LOG_IN_PASSWORD}`;

  fetch(url)
    .then(res => res.json())
    .then(data => res.send({ data }))
    .catch(err => res.send(err));
});

app.get("/api/hot/electro", (req, res, next) => {
  const url = "https://openwhyd.org/hot/[electro]?format=json&limit=20";

  fetch(url)
    .then(res => res.json())
    .then(data => res.send({ data, ...req.params }))
    .catch(err => res.send(err));
});