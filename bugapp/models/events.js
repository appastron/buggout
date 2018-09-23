var mongoose = require('mongoose');

var eventsSchema = new mongoose.Schema({
  event_id: Number,
  event_name: String,
  event_type: String,
  event_message: String,
  event_start_time: { type: Date, default: Date.now },
  event_end_time: { type: Date, default: Date.now },
  event_elapsed_time: Number
});

module.exports = mongoose.model('events', eventsSchema);