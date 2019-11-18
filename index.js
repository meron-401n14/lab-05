'use strict';
const mongoose = require('mongoose');

const db = 'mongodb+srv://meron123:meron123@cfcluster-kexaa.mongodb.net/app?retryWrites=true&w=majority';

const configs = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const Teams = require('./models/teams.js');
const People = require('./models/people.js');

// Instantiate team and people class 
let people = new People();
let team = new Teams();


/**
 * this function shows each record 
 * @param person  takes two line of arguments process.argv firstName and lastName of people
 * display the whole record for each person based on their first name and lastname
 */

const readPerson = async () => {
  // let myArgs = process.argv.slice(2)
  // console.log('myArgs:', myArgs);

  let firstName = process.argv[2];
  let lastName = process.argv[3];

  let allPeople = await people.getByQuery();

  allPeople.forEach(person => {
    if (person.firstName === process.argv[2] && person.lastName === process.argv[3])
      console.log(`name: ${person.firstName} \n Team: ${person._team} \n likes: ${person.likes} \n birthday': ${person.nextBirthdate}`)
      
    });
  
  };
       
     

// let myArgs = process.argv.slice(2)
// console.log('myArgs:', myArgs);  

const readTeam = async () => {
  let color = process.argv[0];
  let teamName = process.argv[1];

  let allTeam = await team.get();
  //console.log(allTeam)
  //let MemebrName = await people.get(_team);
  allTeam.forEach(team => {
    if (team.color === process.argv[0] && team.teamName === process.argv[1] )
      console.log(`Team Name: ${team.teamName} \n color: ${team.color} \n Members: ${team.MemebrName}`);
      else 'No Record Found';
  });
};

/**
 * @function makePerson 
 * creates new record on people data
 */


const makePerson = async () => {
  let peopled = {
    firstName: 'MT',
    lastName: 'Show',
    nextBirthdate: '2020/07/12',
    likes: 'Both',
    _team: null
  }
  // console.log(peopled);
  let newPerson = await people.create(peopled);
  // console.log('peopleCreated', newPerson);
  let personid = newPerson._id;
  updatePerson(personid);
  // let allPerson = await people.get(newPerson);
  // //console.log('from all Person:  ', allPerson);

}

/**
 * this makes new team to our data base
 * @function maketeam
 */
const makeTeam = async () => {
  let team1 = {
    teamName: 'test Heron',
    color: 'red'

  }
  let newTeam = await team.create(team1);

  //console.log('team created:', newTeam);

}
/**
 * here update a person data with team Id , and newly created people will have a team ID 
 *@param {object} personId
 */

const updatePerson = async (personId) => {
  let teams = await team.get();
  let peoples = await people.get();
  //console.log(peoples);
  let teamId = teams[1]._id;
  const updatedPerson = await people.update(personId, { _team: teamId });
  return updatedPerson;
  // console.log("updated", updatedPerson);

}

console.log()
/**
 * This counts our team and people data length
 * @function countData
 */
const countData = async () => {
  let Team = await team.count('_id');
  console.log('Teams', Team);
  let Person = await people.count('_id');
  console.log('People', Person)
}

/**
 * This function call each the above functions asynchronously 
 * @function  foo 
 * run each function asyncroniously 
 */

async function foo() {
  await mongoose.connect(db, configs);
  //console.log('connected');
  await countData();
  await readPerson();
  await readTeam()
  // await makePerson(); 
  //await makeTeam();
  //console.log('person created!');
  //await updatePerson();
  //console.log('team created!');
  await mongoose.connection.close();
  // console.log("closed"); 
}



foo();







