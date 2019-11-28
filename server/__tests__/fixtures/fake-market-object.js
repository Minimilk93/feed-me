export function makeFakeMarketObject() {
  return Object.freeze({
    header: {
      msgId: '7601',
      operation: 'create',
      type: 'market',
      timestamp: 1574277275657
    },
    body: {
      eventId: 'd9320039-4359-45d1-8d84-4af6017cc905',
      marketId: '7f8ce10e-2823-428d-a5b9-fd77ed7e03d3',
      name: 'Goal Handicap (+2)',
      displayed: true,
      suspended: false
    }
  });
}

export function makeFakeMarketDbObject() {
  return Object.freeze({
    eventId: 'd9320039-4359-45d1-8d84-4af6017cc905',
    marketId: '7f8ce10e-2823-428d-a5b9-fd77ed7e03d3',
    name: 'Goal Handicap (+2)',
    displayed: true,
    suspended: false,
    outcomes: []
  });
}
