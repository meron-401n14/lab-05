'use strict';
const mongoose = require('mongoose');

const db ='mongodb+srv://meron123:meron123@cfcluster-kexaa.mongodb.net/app?retryWrites=true&w=majority';

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
 * display the whole record for each person based on the parameter
 */

 const readPerson = async () => {
   
  // let myArgs = process.argv.slice(2)
   //console.log('myArgs:', myArgs);
 
   let firstName = process.argv[2];
   let lastName = process.argv[3]; 
 
   let allPeople = await people.getByQuery();
   
   allPeople.forEach(person => {
     if (person.firstName===process.argv[2] && person.lastName === process.argv[3]) 
     console.log({'firstName':person.firstName, 
     'lastName':person.lastName,
     'likes': person.likes,
     'birthday':person.nextBirthdate,
     'Team': person._team });
   });
    
 };
 
/**
 * @function makePerson 
 * creates new record on people data
 */


const makePerson = async () => {
  let peopled = {
    firstName: 'MorganT',
    lastName: 'Show',
    nextBirthdate: '2020/07/12',
    likes: 'Both',
    _team: null
  }
  // console.log(peopled);
 let newPerson = await people.create(peopled);
  console.log('peopleCreated', newPerson);
 let personid = newPerson._id;
  updatePerson(personid);
  let allPerson = await people.get(newPerson);
  //console.log('from all Person:  ', allPerson);

}

const makeTeam = async () => {
  let team1 = {
    teamName: 'test Heron',
    color: 'red'
   
  }
  let newTeam = await team.create(team1);
  //new
  // let teamid = newTeam._id;
  // let member = newTeam.mem;
  // updateTeam(teamid , member)
  console.log('team created:', newTeam);

}
/**
 * update person
 */

 const updatePerson = async (personId) => {
   let teams = await team.get();
   let peoples = await people.get();
   console.log(peoples);
   let teamId = teams[1]._id; 
   const updatedPerson = await people.update(personId, {_team: teamId});
        return updatedPerson;
  // console.log("updated", updatedPerson);
   
 }

 /**
  * this makes new team to our data base
  * @function maketeam
  */
     
 /**
  * This counts our team and people data length
  * @function countData
  */
 const countData = async () => {
   let Team = await team.count('_id');
   console.log('Teams', Team) ;
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
   //await makePerson(); 
   //await makeTeam();
   //console.log('person created!');
  //await updatePerson();
  //await personInformation();
  //console.log('team created!');
   await mongoose.connection.close();
  // console.log("closed"); 
 }
 
 
 foo(); 









 

 
  






