'use strict';
const mongoose = require('mongoose');

const db ='mongodb+srv://meron123:meron123@cfcluster-kexaa.mongodb.net/app?retryWrites=true&w=majority';

const configs = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const Teams = require('./models/teams.js');
const People = require('./models/people.js');

let people = new People();
let team = new Teams();
/**
 * which creates new people to our database
 * @function makePerson
 */
const makePerson = async () => {
  let peopled = {
    firstName: 'James',
    lastName: 'Dunn',
    nextBirthdate: '2020/09/05',
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
    teamName: 'Red Heron',
    color: 'red'
   
  }
  let newTeam = await team.create(team1);
  console.log('team created:', newTeam);
}
/**
 * update person
 */

 const updatePerson = async (personId) => {
   let teams = await team.get();
   let peoples = await people.get();
   console.log(peoples);
   let teamId = teams[2]._id; 
   //let peopleid = peoples[0]._id;

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

let myArgs = process.argv.slice(2)
console.log('myArgs:', myArgs);


/**
 * this returns person detail information form our database
 * if the firstName and lastName field is correct 
 * @function personInformation
 */
const personInformation = async () => {
  let firstName = process.argv[2];
  let lastName = process.argv[3]; 

  //console.log('firstName:', firstName);
  let detail = await people.getByQuery({firstName:firstName, lastName:lastName,   });
  
  //console.log('here!', detail);
 // let personData = await detail;
  let personData =  detail[0];
  console.log(personData);
  console.log(`name: ${personData.firstName} ${personData.lastName}`);
  console.log(`likes: ${personData.likes}`);
  console.log(`teams: ${personData.Team}`);
  console.log(`Birthday: ${personData.nextBirthdate}`);
  

}


  /**
   * This function call each the above functions asynchronously 
   * @function  foo 
   * run each function asyncroniously 
   */
  
  async function foo() {
    await mongoose.connect(db, configs);
    console.log('connected');
    await makePerson(); 
    //await makeTeam();
    console.log('person created!');
   await updatePerson();
   await countData();
   //await personInformation();
   console.log('team created!');
    await mongoose.connection.close();
    console.log("closed"); 
  }
  

foo(); 
