// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title for your application? (Required)",
    name: "title",
  },
  {
    type: "description",
    message: "Please provide a description of your application. (Required)",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide a link to an image of the application.",
    name: "image",
  },
  {
    type: "input",
    message: "Please explain how to install the application. (Required)",
    name: "installation",
  },
  {
    type: "input",
    message:
      "Please explain how to use the application. If there is a live link, include that as well. (Required)",
    name: "usage",
  },
  {
    type: "list",
    message:
      "Please choose one of the following licenses for your application. (Required)",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GNU GPLv3", "ISC", "No License"],
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
    message: "Please provide a link to your github account. (Required)",
    name: "username",
  },
  {
    type: "input",
    message: "Please provide your email address. (Required)",
    name: "email",
  },
];

// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  // when init function runs, prompt user, then grab the data, and use the data to write the README file
  return inquirer.prompt(questions).then((data) => {
    // variable to hold markdown data
    const markDown = generateMarkdown(data);
    // writes the readme file using the markdown data
    fs.writeFileSync("README.md", markDown);
  });
}

// Function call to initialize app
init();
