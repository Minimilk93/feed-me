import mongoose from 'mongoose';
import { makeFakeEventObject } from './fixtures/fake-event-object';
import { makeFakeMarketObject } from './fixtures/fake-market-object';
import { makeFakeOutcomeObject } from './fixtures/fake-outcome-object';
import makeEventObject from '../src/client/eventObject';

describe('Feed Me Database', () => {
  beforeAll(async () => {
    const url = `mongodb://127.0.0.1/`;
    await mongoose.connect(url, { useNewUrlParser: true });
  });

  it('should take a processed event packet and insert it in to mongo', async () => {
    const newEvent = makeFakeEventObject();
    expect(
      async () => await makeEventObject(newEvent.header, newEvent.body)
    ).not.toThrow();
  });

  it('should take a processed market packet and insert it as a child of the event', () => {
    const newMarket = makeFakeMarketObject();
    expect(
      async () => await makeEventObject(newMarket.header, newMarket.body)
    ).not.toThrow();
  });

  it('should take a processed outcome packet and insert it as a child of the market', () => {
    const newOutcome = makeFakeOutcomeObject();
    expect(
      async () => await makeEventObject(newOutcome.header, newOutcome.body)
    ).not.toThrow();
  });
  // it('should take a processed outcome packet and insert it as a child of the market', () => {});

  // it('should update an event', () => {});

  // it('should update a market', () => {});

  // it('should update an outcome', () => {});

  async function removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections);
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName];
      await collection.deleteMany();
    }
  }

  afterEach(async () => {
    await removeAllCollections();
  });
});
