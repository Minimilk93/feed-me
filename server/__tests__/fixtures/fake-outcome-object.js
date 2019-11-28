export function makeFakeOutcomeObject() {
  return Object.freeze({
    header: {
      msgId: '7709',
      operation: 'create',
      type: 'outcome',
      timestamp: 1574277276112
    },
    body: {
      marketId: '7f8ce10e-2823-428d-a5b9-fd77ed7e03d3',
      outcomeId: 'bd5940d9-22b8-44e7-8954-f5dd013545ae',
      name: '|Reading| +2',
      price: '2/7',
      displayed: true,
      suspended: false
    }
  });
}

export function makeFakeOutcomeDbObject() {
  return Object.freeze({
    marketId: '7f8ce10e-2823-428d-a5b9-fd77ed7e03d3',
    outcomeId: 'bd5940d9-22b8-44e7-8954-f5dd013545ae',
    name: '|Reading| +2',
    price: '2/7',
    displayed: true,
    suspended: false
  });
}
