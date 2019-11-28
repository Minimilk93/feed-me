import mongoose from 'mongoose';
import { Event } from '../src/db/models/eventModel';
import { makeFakeEventDbObject } from './fixtures/fake-event-object';
import { makeFakeMarketDbObject } from './fixtures/fake-market-object';
import { makeFakeOutcomeDbObject } from './fixtures/fake-outcome-object';
import makeEventObject from '../src/client/eventObject';
import {
  createEvent,
  createMarket,
  createOutcome
} from '../src/db/handleEntity';

describe('Feed Me Database', () => {
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/`;
    await mongoose.connect(url, { useNewUrlParser: true });
  });

  it('should take a processed event packet and insert it in to mongo', async () => {
    const newEvent = makeFakeEventDbObject();
    await createEvent(newEvent);

    Event.find({ eventId: newEvent.eventId }, function(err, data) {
      expect(data[0].eventId).toBe(newEvent.eventId);
    });
  });

  it('should take a processed market packet and insert it as a child of the event', async () => {
    const newEvent = makeFakeEventDbObject();
    const newMarket = makeFakeMarketDbObject();

    await createEvent(newEvent);
    await createMarket(newMarket.eventId, newMarket);

    Event.find({ 'markets.marketId': newMarket.marketId }, function(err, data) {
      expect(data[0].markets[0].marketId).toBe(newMarket.marketId);
    });
  });

  it('should take a processed outcome packet and insert it as a child of the market', async () => {
    const newEvent = makeFakeEventDbObject();
    const newMarket = makeFakeMarketDbObject();
    const newOutcome = makeFakeOutcomeDbObject();

    await createEvent(newEvent);
    await createMarket(newMarket.eventId, newMarket);
    await createOutcome(newOutcome.marketId, newOutcome);

    Event.find({ 'markets.marketId': newOutcome.marketId }, function(
      err,
      data
    ) {
      expect(data[0].markets[0].outcomes[0].outcomeId).toBe(
        newOutcome.outcomeId
      );
    });
  });

  // it('should update an event', () => {});

  // it('should update a market', () => {});

  // it('should update an outcome', () => {});
});
