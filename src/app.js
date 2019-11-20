import express from 'express';
import makeClient from './client/makeClient';

const app = express();

makeClient();

app.listen(3000, () => {
  console.log('Running on localhost port 3000');
});
