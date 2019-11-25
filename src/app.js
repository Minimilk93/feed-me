import express from 'express';
import makeClient from './client/makeClient';
import makeDb from './db/';
import { Event } from './db/models/eventModel';
const app = express();

makeDb();
makeClient();

app.get('/', (req, res) => {
  Event.find({}, function(err, events) {
    var eventMap = {};

    events.forEach(function(event) {
      eventMap[event._id] = event;
    });

    res.send(eventMap);
  });
});

app.listen(3000, () => {
  console.log('Running on localhost port 3000');
});
