const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
       name: 'title',
       type: 'input',
       message: 'What is the title of your project?',
    },
    {
        name: 'projectMotivation',
        type: 'input',
        message: 'What was your motivation behind the project?',
     },
     {
        name: 'projectWhy',
        type: 'input',
        message: 'Why did you build this project?',
     },
     {
        name: 'projectWhat',
        type: 'input',
        message: 'What problem does it solve?',
     },
     {
        name: 'features',
        type: 'input',
        message: 'What features does it have?',
     },
     {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step by step description of how to get the development environment running.',
     },
     {
        name: 'instructions',
        type: 'input',
        message: 'What instructions need to be provided to assist the users? Include screenshots as needed.',
     },
     {
        name: 'thirdpartyAssets',
        type: 'input',
        message: 'Did you use any third-party assets that require attributition? If any, list the creators with links to their primary web presence.',
     },
     {
        name: 'linkWebsite',
        type: 'input',
        message: 'What is the link to the website?',
     },
     {
        name: 'linkGithub',
        type: 'input',
        message: 'What is the link to the GitHub repository?',
     },
     {
        name: 'collaborators',
        type: 'input',
        message: 'Did you have collaborators? If any, list them with links to their GitHub profiles.',
     },
     {
        name: 'licensing',
        type: 'list',
        message: 'For licensing purposes, what can and cannot other developers do with your project?',
        choices: ['Apache', 'GNU', 'Mit'],
    }
];


// const writeToFile = (title, projectMotivation, projectWhy, projectWhat, features, installation,
// instructions, thirdpartyAssets, linkWebsite, linkGithub, collaborators, licensing) =>
//     `
//     # ${title}
    
//     ## Description
//     ${projectMotivation} 
//     ${projectWhy}
//     ${projectWhat}
    
//     ## Features
//     ${features}
    
//     ## User Installation
//     ${installation}
    
//     ## User Instructions
//     ${instructions}
    
//     ## Third-party Assets
//     ${thirdpartyAssets}
    
//     ## Links
//     * Link to Website: ${linkWebsite}
//     * Link to GitHub Repository: ${linkGithub}
    
//     ## Collaborators
//     ${collaborators}
    
//     ## Licensing
//     ${licensing}
//     `;


function inquirerPrompts() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        writeToFile(answers);
        })
}

function writeToFile(data) {
    fs.writeFile(`READMEtest.md`, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirerPrompts();
}

// Function call to initialize app
init();
