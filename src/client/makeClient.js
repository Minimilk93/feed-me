import net from 'net';
import split from 'split2';

import processEvent from './processEvent';

export default function makeClient() {
  let client = new net.Socket();

  client.connect(8282, '127.0.0.1', function() {
    console.log('Connected');
  });

  var stream = client.pipe(split());
  stream.on('data', function(data) {
    processEvent(data);
  });

  client.on('close', function() {
    console.log('Connection closed');
  });
}
