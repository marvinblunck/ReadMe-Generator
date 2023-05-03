// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer")
const generateMarkdown= require("./generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
     fs.writeFile(fileName, data, (err) =>
   err ? console.error(err) : console.log('Success!')
 );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                name: "projectTitle",
                type: "input",
                message: "What is the name of your project?",
            },
            {
                name: "describe",
                type: "input",
                message: "general description of project?",
            },
        {
                name: "install",
                type: "input",
                message: "installation instructions?",
            },
            {
                name: "usage",
                type: "input",
                message: "how do you use this website?",
            },
            {
                name: "contribution",
                type: "input",
                message: "How do you contribute to this project?",
            },
            {
                name: "testInstructions",
                type: "input",
                message: "How did you test this website?",
            },
            {
                name: "gitHubUsername",
                type: "input",
                message: "What is the name of your git profile?",
            },
            {
                name: "Email",
                type: "input",
                message: "What is your email?",
            },
            {
                name: "license ",
                type: "input",
                message: "What license  do you use?",
            }
        ])
        .then((answers) => {
            console.log(answers)
            writeToFile("readMe.md");
        })
        .catch((error) => {
            console.log(error)
        });
}

// Function call to initialize app
init();
