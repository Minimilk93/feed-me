import express from 'express';
import makeClient from './client/makeClient';
import makeDb from './db/';
import { Event } from './db/models/eventModel';
const app = express();

makeDb();
makeClient();

app.get('/getEvents', (req, res) => {
  Event.find({}, function(err, file) {
    console.log(err);
    res.json(file);
  });
});

app.listen(5000, () => {
  console.log('Running on localhost port 5000');
});
