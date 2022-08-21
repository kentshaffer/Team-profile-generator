const Manager = require('./employees/Manager')
const Engineer = require('./employees/Engineer')
const Intern = require('./employees/Intern')
const inquirer = require('inquirer')

console.log('create your team');

// start with manager - every team has to have a manager 

// add other members or finish team

// engineer, intern, or done with team

// add switch statement to cycle through prompt choices (as functions)

// create function and prompt questions for switch statement 

// add 'new Employee'

// with saved employee infomation, make dynamic employee cards with js for html 

// style employee cards w/ css





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