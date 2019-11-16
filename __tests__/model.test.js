const Model = require('../models/model.js');
const Teams = require('../models/teams.js');
const People = require('../models/people.js');
const supertester = require('./supertester.js');


let people = new People();

describe('Model', () => {
  test('can create', () => {
    let person = people.create({ firstName: 'Test', lastName: 'Test' });
    expect(person).toBeDefined();
  });

  test('can read', () => {
    let person = people.get('_id');
    expect(person).toBeDefined();
  });

  test('can update', () => {
    let person = people.update('_id', 'item');
    expect(person).toBeDefined();
  });

  xit('can delete', () => {});
});
