const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
       name: 'project title',
       type: 'input',
       message: 'What is the title of your project?',
    },
    {
        name: 'project motivation',
        type: 'input',
        message: 'What was your motivation behind the project?',
     },
     {
        name: 'project description: why',
        type: 'input',
        message: 'Why did you build this project?',
     },
     {
        name: 'project description: what',
        type: 'input',
        message: 'What problem does it solve?',
     },
     {
        name: 'installation requirements',
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step by step description of how to get the development environment running.',
     },
     {
        name: 'user instructions',
        type: 'input',
        message: 'What instructions need to be provided to assist the users? Include screenshots as needed.',
     },
     {
        name: 'collaborators',
        type: 'input',
        message: 'Did you have collaborators? If any, list them with links to their GitHub profiles.',
     },
     {
        name: 'third-party assets',
        type: 'input',
        message: 'Did you use any third-party assets that require attributition? If any, list the creators with links to their primary web presence.',
     },
     {
        name: 'licensing',
        type: 'input',
        message: 'For licensing purposes, what can and cannot other developers do with your project?',
     }
];

// prompts the user with the questions
inquirer.prompt(questions)
.then((data) => {
    const fileName = `README.md`
    writeToFile(fileName, data);
    console.log(data);
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
