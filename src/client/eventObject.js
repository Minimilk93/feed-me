import {
  createEvent,
  createMarket,
  createOutcome,
  updateEvent,
  updateMarket,
  updateOutcome
} from '../db/handleEntity';

export default function makeEventObject(header, body) {
  return makeObject(header, body);

  async function makeObject(header, body) {
    if (header.operation === 'create') {
      switch (header.type) {
        case 'event':
          return createEvent(body);
        case 'market':
          return createMarket(body.eventId, body);
        case 'outcome':
          return createOutcome(body.marketId, body);
        default:
          return;
      }
    }

    if (header.operation === 'update') {
      switch (header.type) {
        case 'event':
          return updateEvent(body.eventId, body);
        case 'market':
          return updateMarket(body.marketId, body);
        case 'outcome':
          return updateOutcome(body.marketId, body.outcomeId, body);
        default:
          return;
      }
    }
  }
}
