'use strict';


const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema({
  // new MongooseSchema
  firstName: { required: true, type: String },
  lastName: { required: true, type: String },
  nextBirthdate: { type: Date, default: Date.now },
  likes: {type: String, enum: ['dog', 'cat', 'none', 'both']},
  _team: { type: mongoose.Schema.Types.ObjectId },
});

module.exports = mongoose.model('people', peopleSchema); 
//Math.floor(Math.random() * 10)
