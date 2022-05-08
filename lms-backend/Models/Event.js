import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  // time: {
  //     type: Date,
  //     required: true
  // },
  venue: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model('Event', EventSchema);

export default Event;
