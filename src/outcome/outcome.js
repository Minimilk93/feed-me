export default function makeOutcome(header, body) {
  return Object.freeze({
    header,
    body: {
      marketId: body[0],
      outcomeId: body[1],
      name: body[2].replace(/\\/g, ''),
      price: body[3],
      displayed: Boolean(parseInt(body[4])),
      suspended: Boolean(parseInt(body[5]))
    }
  });
}
