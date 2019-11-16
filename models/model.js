'use strict';
/** Class representing a generic mongo model */
const schema = require('./people-schema.js');

/** 
 * model constructor
 * @param schema {object} - mongo schema
 */

class Model {
  constructor(schema) {
    this.schema= schema;
  }

  /**
   * create a new record and check validity against the schema AND SAVE TO dB 
   * @param {object} item 
   * validate and create new item model to mongod DB 
   */
  create(item) {
    
    let validatedItem = new this.schema(item);
    return validatedItem.save();
  }
  /**
 * get record by id 
 * @param {object} _id 
 */
  get(_id) {
    if (_id) return this.schema.findOne({ _id });
    else return this.schema.find({});
  }
  /**
   * get record  by query 
   * @param {object} query 
   */
  getByQuery(query) {
    if (query) return this.schema.find(query);
    else return this.schema.find({});
  }
  /**
   * @param { object} _id 
   * @param {object} item
   * update a record with that id 
   */
  update(_id, item) {
    return schema.findByIdAndUpdate(_id, item, { new: true });
  }
  /**
 * delete operation 
 * @param {object} _id 
 * delete item with that id 
 */ 
  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }
  /**
   * @query
   * count the length of the record in DB
   */
  count(query) {
    if(query) return this.schema.countDocuments(query);
    else return this.schema.countDocuments({});
  }


}

module.exports = Model;






