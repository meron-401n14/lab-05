'use strict';


const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema({
  // new MongooseSchema
  firstName: { required: true, type: String },
  lastName: { required: true, type: String },
  nextBirthdate: { type: Date, default: Date.now },
  likes: ['dog', 'cat', 'none'],
  _team: { type: mongoose.Schema.Types.ObjectId },
});

module.exports = mongoose.model('people', peopleSchema); 
