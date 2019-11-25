import makeFakeOutcomePacket from './fixtures/fake-outcome-packet';
import makeFakeEventPacket from './fixtures/fake-event-packet';
import makeFakeMarketPacket from './fixtures/fake-market-packet';
import processEvent from '../src/client/processEvent';

describe('Feed Me Client', () => {
  it('should take an event packet and process it', async () => {
    const event = makeFakeEventPacket();
    const processedEvent = await processEvent(event);

    expect(processedEvent).toMatchObject({
      header: {
        msgId: 7605,
        operation: 'update',
        type: 'event',
        timestamp: 1574277275657
      },
      body: {
        eventId: 'd9320039-4359-45d1-8d84-4af6017cc905',
        category: 'Tennis',
        subCategory: 'Australian Open',
        name: '|Grigor Dimitrov| vs |Rafael Nadal|',
        startTime: 1574276755248,
        displayed: true,
        suspended: false
      }
    });
  });

  it('should take a market packet and process it', async () => {
    const market = makeFakeMarketPacket();
    const processedMarket = await processEvent(market);

    expect(processedMarket).toMatchObject({
      header: {
        msgId: 7601,
        operation: 'update',
        type: 'market',
        timestamp: 1574277275657
      },
      body: {
        eventId: 'd8f4349b-1f0c-4a95-9290-6a3a18d27810',
        marketId: '7f8ce10e-2823-428d-a5b9-fd77ed7e03d3',
        name: 'Goal Handicap (+2)',
        displayed: true,
        suspended: false
      }
    });
  });

  it('should take an outcome packet and process it', async () => {
    const outcome = makeFakeOutcomePacket();
    const processedOutcome = await processEvent(outcome);

    expect(processedOutcome).toMatchObject({
      header: {
        msgId: 7709,
        operation: 'update',
        type: 'outcome',
        timestamp: 1574277276112
      },
      body: {
        marketId: 'b24b89d7-a567-4490-88a0-b384b9efb1a7',
        outcomeId: 'bd5940d9-22b8-44e7-8954-f5dd013545ae',
        name: '|Reading| +2',
        price: '2/7',
        displayed: true,
        suspended: false
      }
    });
  });
});
