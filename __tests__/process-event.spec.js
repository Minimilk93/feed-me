import makeFakeOutcomePacket from './fixtures/fake-outcome-packet';
import processEvent from '../src/client/processEvent';

describe('Feed Me Client', () => {
  it('should take an outcome packet and process it', () => {
    const outcome = makeFakeOutcomePacket();
    const processedOutcome = processEvent(outcome);

    expect(processedOutcome.header).toMatchObject({
      msgId: 7709,
      operation: 'update',
      type: 'outcome',
      timestamp: '1574277276112'
    });

    expect(processedOutcome.body).toMatchObject({
      marketId: 'b24b89d7-a567-4490-88a0-b384b9efb1a7',
      outcomeId: 'bd5940d9-22b8-44e7-8954-f5dd013545ae',
      name: '|Reading| +2',
      price: '2/7',
      displayed: true,
      suspended: false
    });
  });
});
