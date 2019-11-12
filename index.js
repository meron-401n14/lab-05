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
    firstName: 'Testwhy',
    lastName: 'Dunn',
    nextBirthdate: '2020/09/05',
    likes: 'both',
    
  }
  let newPerson = await people.create(peopled);
  //console.log('peopleCreated', newPerson);

  let allPerson = await people.get();
  //console.log('all Person', allPerson);

}
/**
 * this makes new team to our data base
 * @function maketeam
 */
const makeTeam = async () => {
  let team1 = {
    teamName: 'Yellow Rhino',
    color: 'yellow',
    memberName: 'Meron'
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
 let detail = await people.get();
 detail.forEach(d =>{
   if(people.firstName && people.lastName) return {firstName:d.firstName, lastName:d.lastName}
   //console.log(d.firstName);
   else{
     return 'not found';
   }
 });
}
//console.log(detail)
//  detail.forEach(item =>{
//    if(item.firstName && item.lastName) //console.log(item)
   
  //  if(people.firstName && people.lastName) return item 
  //  console.log(item)
   //else return "No Record Found";
 
//  console.log(detail)
//  //.forEach(item => {
//    if(people.firstName) return detail 
//    else return "No Record Found";
 //console.log(detail)
 

  // //if(people.firstName && people.lastName) 
  //   if(people.firstName){

  //     return people.get();
  //   }else
  //   //({name:firstName, Team:people.teamName, Birthday:people.nextBirthdate, Likes:people.likes});
  //  return "No record Found"

  /**
   * This function call each the above functions asynchronously 
   * @function  foo 
   * run each function asyncroniously 
   */
  
  async function foo() {
    await mongoose.connect(db, configs);
    console.log('connected');
   // await makePerson(); 
    console.log('person created!');
   //await makeTeam();
   await countData();
   await personInformation();
   console.log('team created!');
    await mongoose.connection.close();
    console.log("closed"); 
  }
  

foo(); 
