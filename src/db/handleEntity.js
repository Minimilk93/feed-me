import { Event } from './models/eventModel';

export async function createEvent(event) {
  const feedMeEvent = await new Event(event.body);

  try {
    await feedMeEvent.save();
  } catch (err) {
    console.error(err);
  }
}

export async function updateEvent(eventId, event) {
  Event.findOne({ eventId: eventId }, async function(err, foundEvent) {
    event = foundEvent;

    try {
      await event.save();
    } catch (err) {
      console.error(err);
    }
  });
}

export async function createMarket(eventId, market) {
  Event.findOne({ eventId: eventId }, async function(err, event) {
    if (event === null) {
      return;
    }
    event.markets.push(market.body);

    try {
      await event.save();
    } catch (err) {
      console.error(err);
    }
  });
}

export async function updateMarket(marketId, market) {
  Event.findOne({ 'markets.marketId': marketId }, async function(err, event) {
    if (event === null) {
      return;
    }
    let filter = event.markets.filter(market => market.marketId === marketId);
    filter[0] = market.body;

    try {
      await event.save();
    } catch (err) {
      console.error(err);
    }
  });
}

export async function createOutcome(marketId, outcome) {
  Event.findOne({ 'markets.marketId': marketId }, async function(err, event) {
    if (event === null) {
      return;
    }
    let filter = event.markets.filter(market => (market.marketId = marketId));
    filter[0].outcomes.push(outcome.body);

    try {
      await event.save();
    } catch (err) {
      console.error(err);
    }
  });
}

export async function updateOutcome(marketId, outcomeId, outcome) {
  Event.findOne({ 'markets.marketId': marketId }, async function(err, event) {
    if (event === null) {
      return;
    }
    let marketFilter = event.markets.filter(
      market => (market.marketId = marketId)
    );
    let outcomeFilter = marketFilter.filter(
      market => market.outcomeId === outcomeId
    );

    if (outcomeFilter[0] === null) {
      marketFilter[0].outcomes.push(outcome.body);
    } else {
      outcomeFilter[0] === outcome.body;
    }

    try {
      await event.save();
    } catch (err) {
      console.error(err);
    }
  });
}
