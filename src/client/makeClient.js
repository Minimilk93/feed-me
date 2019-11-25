import net from 'net';
import split from 'split2';

import processEvent from './processEvent';
import makeEventObject from './eventObject';

export default function makeClient() {
  let client = new net.Socket();

  client.connect(8282, '127.0.0.1', function() {
    console.info('Connected');
  });

  const stream = client.pipe(split());
  stream.on('data', function(data) {
    const event = processEvent(data);
    makeEventObject(event);
  });

  client.on('error', function() {
    console.warn('Encountered an error, retrying...');
    setTimeout(makeClient, 1000);
  });

  client.on('end', function() {
    console.info('End of stream connection closed');
  });
}
