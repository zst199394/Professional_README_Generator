// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'badge',
        message: 'What is the badge link of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?',
    },
    {
        type: 'input',
        name: 'licence',
        message: 'What is the  project licence?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is the contributing?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your github user name',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];
inquirer
 .prompt(questions)
 .then((answers) =>{
     fs.writeToFile('README_example.md',generateMarkdown(answers),(err)=>
     err ? console.logg(err) : console.log('Successfully create README_example.md !')
     );

 });
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
