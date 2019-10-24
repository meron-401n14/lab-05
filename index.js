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

const makePerson = async () => {
  let peopled = {
    firstName: 'James',
    lastName: 'Dunn',
    nextBirthdate: '2020/09/05',
    likes: 'both',
    _team:'5db170a0a8abcb4e6999c13f'
    

  }
  let newPerson = await people.create(peopled);
  console.log('peopleCreated', newPerson);

}

const makeTeam = async () => {
  let team1 = {
    teamName: 'Purple Cat',
    color: 'purple',
    memberName: ''
  }

  let newTeam = await team.create(team1);
  console.log('team created:', newTeam);

}

async function foo() {
  await mongoose.connect(db, configs);
  console.log('connected');
  //await makePerson(); 
  console.log('person created!');
 //await makeTeam();
 console.log('team created!');
  await mongoose.connection.close();
  console.log("closed"); 
}

foo(); 








/**
const Teams = require('./models/teams.js');
const People = require('./models/people.js');



let people = new People();
let team = new Teams();

const makePerson = async () =>{
  try {
  let peopled = {
    firstName: "meron",
    lastName :"sibani"
  };
  let newPerson = await people.create(peopled);
  console.log('peopleCreated', newPerson);

}
catch(e){
  console.error(e);
}
  
}

makePerson();
*/

  // let cfStudent = await people.create(student);
  // console.log('Student Created', cfStudent);

  // let allStudents = await people.get()
  // console.log('All Students', allStudents);

  // let oneStudent = await people.get('_team');
  // console.log('One Student', oneStudent);







// async function makePerson(person) {
//   //let made = await people.create(person);
//   //try {
//     let found = await people.getByQuery(person);
//     console.log(found);
//     return found;
//   // }
 




// {
//   firstName: 'Meron',
//   lastName: 'Sibani',
//   nextBirthdate: '10/10/2020'

// }).then(() => {
//   console.log("i'm here!");
  
// });

// mmakeTeam({
//   teamName: 'seahawks',
//   memberName: 'Russell Wilson'
// }).then(()=>{
//   console.log('game over!')
//   mongoose.connection.close();
// })


//mongoose.connection.close();
//const Validator = require('./lib/validator.js');
// const uuidValidate = require('uuid-validate');

/*
//.  0.    1.      2.     3
// node index.js.  ??    ??
let people = new People(process.argv.slice(2)[0]);
let teams = new Teams(process.argv.slice(3)[0]);

async function loadData() {
  let peopleData = await people.load();
  let teamData = await teams.load();
}

async function createPerson(person) {
  // In order to create a new person
  // check if their team exists
  // if not, create a new team
  // set this new person's team equal to the new
  // team id created
  // finaly, create this person

  let team = await findTeam(person.team);

  if (!team.id) {
    // should we first validate that:
    // person.team exists
    // person.team is NOT a uuid
    team = await teams.create({ name: person.team });

    // create the team
    // get that new id
    // create person
  }

  return await people.create({ ...person, team: team.id });
}

async function findTeam(val) {
  // val can be either id or a string
  // shouldn't matter, i should just try to find
  // if that team exists

  let result = {};

  if (Validator.isString(val)) result = await teams.read('name', val);
  else if (Validator.isUUID(val)) result = await teams.read('id', val);

  return result;
}

async function readPerson(person) {
  // search
  // go through and read the people database
  // find people that match whatever params this function
  // has
}

async function updatePerson(id, newPersonData) {
  // call people.update
  // UNLESS
  // did this person change teams?
  // if they did
  // you need to verify the team they are now in exists
  // and you need to verify the team they left still has some people
}

async function deletePerson() {
  // if you delete a person and their team
  // no longer has people
  // you should delete the team!
}

async function printTeams() {
  // for each team
  // print the name
  // print the members of that team
}

async function runOperations() {
  await loadData();
  await createPerson({
    firstName: 'Sarah',
    lastName: 'Smalls',
    team: 'Yellow Rhino'
  });
}

runOperations(); */
