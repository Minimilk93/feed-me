import makeEvent from '../event/event';
import makeMarket from '../market/market';
import makeOutcome from '../outcome/outcome';

export default function processEvent(event) {
  const validEvent = readEvent(event);
  return validEvent;

  function readEvent(event) {
    const regex = new RegExp(/(?<!\\)\|/);
    let splitEvent = event.split(regex);
    let header;
    let body;
    let eventObject;

    try {
      header = makeheader(
        splitEvent[1],
        splitEvent[2],
        splitEvent[3],
        parseInt(splitEvent[4])
      );
      body = splitEvent.slice(5);
      eventObject = makeEventObject(header, body);

      return eventObject;
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

  function makeEventObject(header, body) {
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
