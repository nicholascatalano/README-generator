// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title for your application?",
    name: "title",
  },
  {
    type: "description",
    message: "Please provide a description of your application.",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide a link to the live website.",
    name: "urlLink",
  },
  {
    type: "input",
    message: "Please provide a link to an image of the application.",
    name: "image",
  },
  {
    type: "input",
    message: "Please explain how to install the application.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please explain how to use the application.",
    name: "usage",
  },
  {
    type: "list",
    message:
      "Please choose one of the following licenses for your application.",
    name: "license",
    choices: ["MIT", "GNUGPLv3", "GNUGPLv2", "ISC", "Apache2"],
  },
  {
    type: "input",
    message: "Please provide any contribution guidelines.",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "Please provide the names of those that need to credited for the development of the application.",
    name: "credits",
  },
  {
    type: "input",
    message:
      "Please provide instructions on how to run tests on the application?",
    name: "tests",
  },
  {
    type: "input",
    message: "Please provide your github username.",
    name: "username",
  },
  {
    type: "input",
    message: "Please provide your email address.",
    name: "email",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions).then((data) => {
    const markDown = generateMarkdown(data);
    fs.writeFileSync("README.md", markDown);
  });
}

// Function call to initialize app
init();
