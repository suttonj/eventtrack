'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: String,
  info: String,
  genre: String,
  date: Date,
  active: Boolean
});

module.exports = mongoose.model('Event', EventSchema);