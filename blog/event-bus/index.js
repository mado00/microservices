const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

// store all events
const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  // Posts service 4000, Comment service 4001, Query service 4002, Modaration service 4003
  axios.post('http://localhost:4000/events', event);
  axios.post('http://localhost:4001/events', event);
  axios.post('http://localhost:4002/events', event);
  axios.post('http://localhost:4003/events', event);

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
})

app.listen(4005, () => {
  console.log('Listening on 4005');
});
