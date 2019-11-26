export default function makeEvent(header, body) {
  return Object.freeze({
    header,
    body: {
      eventId: body[0],
      category: body[1],
      subCategory: body[2],
      name: body[3].replace(/\\/g, ''),
      startTime: parseInt(body[4]),
      displayed: Boolean(parseInt(body[5])),
      suspended: Boolean(parseInt(body[6]))
    }
  });
}
