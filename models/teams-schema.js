'use strict';

const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
  teamName: { required: true, type: String },
  color:{ required:true, enum: ['red', 'yellow', 'blue'] , type: String},
  memberName: { required: false, type: String },
  
});
//exports.teamSchema = teamSchema;
module.exports = mongoose.model('teams', teamSchema);
  

