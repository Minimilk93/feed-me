export function makeFakeMarketObject() {
  return Object.freeze({
    header: {
      msgId: '7601',
      operation: 'create',
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
}
