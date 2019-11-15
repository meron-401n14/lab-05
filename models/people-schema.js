'use strict';


const mongoose = require('mongoose');

const peopleSchema = mongoose.Schema({
  firstName: { required: true, type: String },
  lastName: { required: true, type: String },
  nextBirthdate: { type: Date, default: Date.now },
  likes: {type: String, required: true, lowercase: true, enum: ['dog', 'cat', 'none', 'both']},
  _team: { type: String, required: false },
});
 

module.exports = mongoose.model('people', peopleSchema); 



