import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const outcomeSchema = Schema({
  marketId: {type: String, required: true},
  outcomeId: {type: String, required: true},
  name:  {type: String, required: true},
  price:  {type: String, required: true},
  displayed:  {type: Boolean, required: true},
  suspended:  {type: Boolean, required: true}
});

const marketSchema = Schema({
  eventId:  {type: String, required: true},
  marketId:  {type: String, required: true},
  name:  {type: String, required: true},
  displayed:  {type: Boolean, required: true},
  suspended:  {type: Boolean, required: true},
  outcomes: [outcomeSchema]
});

const eventSchema = Schema(
  {
    eventId:  {type: String, required: true},
    category:  {type: String, required: true},
    subCategory:  {type: String, required: true},
    name:  {type: String, required: true},
    startTime:  {type: Number, required: true},
    displayed:  {type: Boolean, required: true},
    suspended:  {type: Boolean, required: true},
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
