const Manager = require('./employees/Manager')
const Engineer = require('./employees/Engineer')
const Intern = require('./employees/Intern')
const inquirer = require('inquirer');
const fs = require('fs');

const managerArray = [];
const engineerArray = [];
const internArray = [];

console.log('create your team');



// add 'new Employee'

// with saved employee infomation, make dynamic employee cards with js for html 

// style employee cards w/ css




// start with manager - every team has to have a manager 
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
    .then((answers) => {
      const boss = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      managerArray.push(boss);
      managerArray.forEach(answers => {
        const managerCard =
          `
          <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <title>Dev Team</title>
</head>
  <body>
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${answers.name}: Manager
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${answers.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
        <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
      </ul>
    </div>
        `
        fs.writeFile('team.html', managerCard, (err) =>
          err ? console.log(err) : console.log('Successfully added a member to you team')
        );
      })
    addTeam();
  });
}

buildBoss();

// add other members or finish team
// engineer, intern, or done with team
// add switch statement to cycle through prompt choices (as functions)
// create function and prompt questions for switch statement 

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
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      engineerArray.push(engineer);
      engineerArray.forEach(answers => {
        const engineerCard =
          `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${answers.name}: Engineer
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${answers.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${answers.github}" target="_blank" rel="noopener noreferrer">${answers.github}</a></li>
      </ul>
    </div>
        `
        fs.appendFile('team.html', engineerCard, (err) =>
          err ? console.log(err) : console.log('Successfully added a member to you team')
        );
      })
    addTeam();
  });
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
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      internArray.push(intern);
      internArray.forEach(answers => {
        const internCard =
          `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        ${answers.name}: Intern
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee ID: ${answers.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
        <li class="list-group-item">Currently Attending: ${answers.school}</li>
      </ul>
    </div>
  </body>
</html>
        `
        fs.appendFile('team.html', internCard, (err) =>
          err ? console.log(err) : console.log('Successfully added a member to you team')
        );
      })
    addTeam();
  });
}

function createTeam() {
  console.log(managerArray[0].name);
}











// function buildEmployee() {
//   inquirer.prompt([
//     {
//       type: 'input',
//       name: 'name',
//       message: 'What is the employees name',
//       validate: answer => {
//         if (answer !== '') {
//           return true
//         }
//         return 'name is required'
//       }
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: 'What is the employees id'
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: 'What is the employees email'
//     },
//     {
//       type: 'list',
//       name: 'type',
//       message: 'What type of employee would you like to add',
//       choices: ['Manager', 'Engineer', 'Intern']
//     },
//   ]).then(answers => {
//     if (answers.type === 'Manager') {
//       inquirer.prompt({ type: 'input', name: 'officeNumber', message: 'what is the managers office number' });
//     } else if (answers.type === 'Engineer') {
//       inquirer.prompt({ type: 'input', name: 'github', message: 'what is the engineers github username' });
//     } else {
//       inquirer.prompt({ type: 'input', name: 'school', message: 'what school does the intern attend' });
//       // console.log(lastQuestion, answers);
//     }
//   });
// }

// buildEmployee()