'use strict';

const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  teamName: { required: true, type: String },
  memberName: { required: true, type: String },
  _team: { type: mongoose.Schema.Types.ObjectId },
});
 
module.exports = mongoose.model('team', teamSchema);






