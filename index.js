const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
       name: 'title',
       type: 'input',
       message: 'What is the title of your project?',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Include a description of your project.',
     },
     {
        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project? Provide a description of how to get the development environment running.',
     },
     {
        name: 'usage',
        type: 'input',
        message: 'What instructions need to be provided to assist the users with the project usage?',
     },
     {
        name: 'guidelines',
        type: 'input',
        message: 'What are the contribution guidelines?',
     },
     {
        name: 'test',
        type: 'input',
        message: 'Please provide test instructions.'
     },
     {
        name: 'linkWebsite',
        type: 'input',
        message: 'What is the link to the website?',
     },
     {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username?',
     },
     {
        name: 'githubLink',
        type: 'input',
        message: 'What is the link to your GitHub repository?',
     },
     {
        name: 'screenshot',
        type: 'input',
        message: 'Please provide the pathway from your current directory to a screenshot of the application.',
     },
     {
        name: 'email',
        type: 'input',
        message: 'What is your email address?',
     },
     {
        name: 'license',
        type: 'list',
        message: 'Please select the license you would like to use for your project.',
        choices: ['Apache', 'GNU', 'MIT', 'None'],
    }
];

// Function to prompt the questions
function inquirerPrompts() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        writeToFile(answers);
        })
}

// Function to write the README.md file
function writeToFile(data) {
    fs.writeFile('MockupREADME.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Success!'));
}

// Function to initialize app
function init() {
    inquirerPrompts();
}

// Function call to initialize app
init();
