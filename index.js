// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What is your projects license?',
      choices: ['Apache','Boost', 'MIT', 'Unlicense']
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'Installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Usage Information:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Test instructions?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address',
      },
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdownContent = generateMarkdown(data);
  
    fs.writeFile(fileName, markdownContent, (err) =>
      err ? console.log(err) : console.log('Successfully created ReadME!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile("README.md", answers);
    });
}

// Function call to initialize app
init();
