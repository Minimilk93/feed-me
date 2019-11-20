export default function makeMarket(header, body) {
  return Object.freeze({
    header,
    body: {
      eventId: body[0],
      marketId: body[1],
      name: body[3].replace(/(?<!\\)\|/g, ''),
      displayed: body[5],
      suspended: body[6]
    }
  });
}
