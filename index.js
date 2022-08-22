const Manager = require('./employees/Manager')
const Engineer = require('./employees/Engineer')
const Intern = require('./employees/Intern')
const inquirer = require('inquirer');
const { createReadStream } = require('fs');

console.log('create your team');

// start with manager - every team has to have a manager 

// add other members or finish team

// engineer, intern, or done with team

// add switch statement to cycle through prompt choices (as functions)

// create function and prompt questions for switch statement 

// add 'new Employee'

// with saved employee infomation, make dynamic employee cards with js for html 

// style employee cards w/ css

function buildBoss() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the managers name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the managers employee ID?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the managers email address?'
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the managers office number?'
    },
  ])
}
function addTeam() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'addTeamMembers',
      message: 'What type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'None - Team is complete']
    },
  ])
  .then((memberChoice) => {
    switch (memberChoice.addTeamMembers) {
      case 'Engineer':
        createEngineer();
        break;
      case 'Intern':
        createIntern();
        break;
      default:
        createTeam();
    }
  });
}
function createEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the engineers name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the engineers employee ID?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the engineers email address?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is the engineers GitHub username?'
    },
  ])
}
function createIntern() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the interns name?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the interns employee ID?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the interns email address?'
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school does the intern attend?'
    },
  ])
}



function buildEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employees name',
      validate: answer => {
        if (answer !== '') {
          return true
        }
        return 'name is required'
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employees id'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employees email'
    },
    {
      type: 'list',
      name: 'type',
      message: 'What type of employee would you like to add',
      choices: ['Manager', 'Engineer', 'Intern']
    },
  ]).then(answers => {
    if (answers.type === 'Manager') {
      inquirer.prompt({ type: 'input', name: 'officeNumber', message: 'what is the managers office number' });
    } else if (answers.type === 'Engineer') {
      inquirer.prompt({ type: 'input', name: 'github', message: 'what is the engineers github username' });
    } else {
      inquirer.prompt({ type: 'input', name: 'school', message: 'what school does the intern attend' });
      // console.log(lastQuestion, answers);
    }
  });
}

buildEmployee()