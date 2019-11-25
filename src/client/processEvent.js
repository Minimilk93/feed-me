import makeEvent from '../event/event';
import makeMarket from '../market/market';
import makeOutcome from '../outcome/outcome';

export default function processEvent(event) {
  return readEvent(event);

  function readEvent(event) {
    const regex = new RegExp(/(?<!\\)\|/);
    let splitEvent = event.split(regex);
    let header;
    let body;

    try {
      header = makeheader(
        splitEvent[1],
        splitEvent[2],
        splitEvent[3],
        parseInt(splitEvent[4])
      );
      body = splitEvent.slice(5);

      return makeFullObject(header, body);
    } catch (e) {
      console.log(e);
    }
  }

  function makeheader(id, operation, type, timestamp) {
    return Object.freeze({
      msgId: parseInt(id),
      operation,
      type,
      timestamp
    });
  }

  function makeFullObject(header, body) {
    switch (header.type) {
      case 'event':
        return makeEvent(header, body);
      case 'market':
        return makeMarket(header, body);
      case 'outcome':
        return makeOutcome(header, body);
      default:
        return;
    }
  }
}
