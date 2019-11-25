import {
  createEvent,
  createMarket,
  createOutcome,
  updateEvent,
  updateMarket,
  updateOutcome
} from '../db/handleEntity';

export default function makeEventObject(eventObject) {
  return makeObject(eventObject);
  async function makeObject(eventObject) {
    if (eventObject.header.operation === 'create') {
      switch (eventObject.header.type) {
        case 'event':
          createEvent(eventObject.body);
          break;
        case 'market':
          createMarket(eventObject.body.eventId, eventObject.body);
          break;
        case 'outcome':
          createOutcome(eventObject.body.marketId, eventObject.body);
          break;
        default:
          return;
      }
    }

    if (eventObject.header.operation === 'update') {
      switch (eventObject.header.type) {
        case 'event':
          updateEvent(eventObject.body.eventId, eventObject.body);
          break;
        case 'market':
          updateMarket(eventObject.body.marketId, eventObject.body);
          break;
        case 'outcome':
          updateOutcome(
            eventObject.body.marketId,
            eventObject.body.outcomeId,
            eventObject.body
          );
          break;
        default:
          return;
      }
    }
  }
}
