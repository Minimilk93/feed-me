import express from 'express';
import makeClient from './client/makeClient';
import makeDb from './db/';

const app = express();

makeDb();
makeClient();

app.listen(3000, () => {
  console.log('Running on localhost port 3000');
});
