export function makeFakeEventObject() {
  return Object.freeze({
    header: {
      msgId: '7605',
      operation: 'create',
      type: 'event',
      timestamp: 1574277275657
    },
    body: {
      eventId: 'd9320039-4359-45d1-8d84-4af6017cc905',
      category: 'Tennis',
      subCategory: 'Australian Open',
      name: 'Grigor Dimitrov vs Rafael Nadal',
      startTime: 1574276755248,
      displayed: true,
      suspended: false
    }
  });
}

export function makeFakeEventDbObject() {
  return Object.freeze({
    eventId: 'd9320039-4359-45d1-8d84-4af6017cc905',
    category: 'Tennis',
    subCategory: 'Australian Open',
    name: 'Grigor Dimitrov vs Rafael Nadal',
    startTime: 1574276755248,
    displayed: true,
    suspended: false,
    markets: []
  });
}
