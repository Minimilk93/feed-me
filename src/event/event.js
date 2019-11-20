export default function makeEvent(header, body) {
  return Object.freeze({
    header,
    body: {
      eventId: body[0],
      category: body[1],
      subCategory: body[2],
      name: body[3].replace(/(?<!\\)\|/g, ''),
      startTime: body[4],
      displayed: body[5],
      suspended: body[6]
    }
  });
}
