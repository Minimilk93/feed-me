import makeEvent from '../event/event';
import makeMarket from '../market/market';
import makeOutcome from '../outcome/outcome';
import { updateEvent, updateMarket, updateOutcome } from '../db/handleEntity';
import database from '../db/';

export default function processEvent(event) {
  readEvent(event);

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

  async function makeEventObject(header, body) {
    const makeDb = await database;
    switch (header.type) {
      case 'event':
        const eventObject = makeEvent(header, body);
        updateEvent(eventObject, makeDb);
        break;
      case 'market':
        const marketObject = makeMarket(header, body);
        updateMarket(marketObject.body.eventId, marketObject, makeDb);
        break;
      case 'outcome':
        const outcomeObject = makeOutcome(header, body);
        updateOutcome(outcomeObject.body.marketId, outcomeObject, makeDb);
        break;
      default:
        return;
    }
  }
}
