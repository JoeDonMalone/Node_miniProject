const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your favorite color?',
      name: 'confirm',
    },
    {
        type: 'input',
        message: 'What is your favorite food?',
        name: 'Food',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn profile?',
        name: 'LinkedIn',
      },
      {
        type: 'input',
        message: 'What is your GitHub profile?',
        name: 'Git Profile',
      },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );