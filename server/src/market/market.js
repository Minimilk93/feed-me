export default function makeMarket(header, body) {
  return Object.freeze({
    header,
    body: {
      eventId: body[0],
      marketId: body[1],
      name: body[2].replace(/\\/g, ''),
      displayed: Boolean(parseInt(body[3])),
      suspended: Boolean(parseInt(body[4]))
    }
  });
}
