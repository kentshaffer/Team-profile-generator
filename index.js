const Manager = require('./employees/Manager')
const Engineer = require('./employees/Engineer')
const Intern = require('./employees/Intern')
const inquirer = require('inquirer')

function buildEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the employees name', 
      validate: answer => {
        if(answer !== '') {
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
    if(answers.type === 'Manager') {
      let lastQuestion = inquirer.prompt({type: 'input', name: 'officeNumber', message: 'what is the managers office number'})
      console.log(lastQuestion, answers);
    }
  })
}

buildEmployee()