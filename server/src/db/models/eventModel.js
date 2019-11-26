import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const outcomeSchema = Schema({
  marketId: String,
  outcomeId: String,
  name: String,
  price: String,
  displayed: Boolean,
  suspended: Boolean
});

const marketSchema = Schema({
  eventId: String,
  marketId: String,
  name: String,
  displayed: Boolean,
  suspended: Boolean,
  outcomes: [outcomeSchema]
});

const eventSchema = Schema(
  {
    eventId: String,
    category: String,
    subCategory: String,
    name: String,
    startTime: Number,
    displayed: Boolean,
    suspended: Boolean,
    markets: [marketSchema]
  },
  {
    collection: 'events',
    timestamps: true
  }
);

export const Market = mongoose.model('Market', marketSchema);
export const Event = mongoose.model('Event', eventSchema);
export const Outcome = mongoose.model('Outcome', outcomeSchema);
