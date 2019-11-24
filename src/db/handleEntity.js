import { Event } from './models/eventModel';

export async function updateEvent(event) {
  const feedMeEvent = await new Event(event.body);

  try {
    await feedMeEvent.save();
  } catch (err) {
    console.error(err);
  }
}

export async function updateMarket(eventId, market) {
  return await Event.findOne({ eventId: eventId }).exec((err, event) => {
    if (event === null) {
      return;
    }
    event.markets.push(market.body);
    event.save();
  });
}

export async function updateOutcome(marketId, outcome) {
  const bob = await Event.findOne({ 'markets.marketId': marketId });

  if (bob !== null) {
    let filter = await bob.markets.filter(
      market => (market.marketId = marketId)
    );

    filter[0].outcomes.push(outcome.body);

    const updatedBob = await bob.save();
    console.log(updatedBob);
  }
}
