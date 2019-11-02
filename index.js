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
    likes: 'both'
  }
  let newPerson = await people.create(peopled);
  console.log('peopleCreated', newPerson);

  let allPerson = await people.get(firstName);
  console.log('all Person', allPerson);

}
/**
 * this makes new team to our data base
 * @function maketeam
 */
const makeTeam = async () => {
  let team1 = {
    teamName: 'Purple Cat',
    color: 'purple',
  }
  let newTeam = await team.create(team1);
  console.log('team created:', newTeam);
}
    
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
 * this returns person detail information form our database
 * if the firstName and lastName field is correct 
 * @function personInformation
 */
const personInformation = async () => {
 let detail = await people.getByQuery(people.firstName, people.lastName);
 console.log(detail)
 
  if(people.firstName && people.lastName) 
    return people.find({});
    //({name:firstName, Team:people.teamName, Birthday:people.nextBirthdate, Likes:people.likes});
  else return "No record Found"
}
  /**
   * This function call each the above functions asynchronously 
   * @function  foo 
   * run each function asyncroniously 
   */
  
  async function foo() {
    await mongoose.connect(db, configs);
    console.log('connected');
    //await makePerson(); 
    console.log('person created!');
   //await makeTeam();
   await countData();
   await personInformation();
   console.log('team created!');
    await mongoose.connection.close();
    console.log("closed"); 
  }
  

foo(); 
