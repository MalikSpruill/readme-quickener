// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter your github username. *username will be added to questions section of README (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the title of your project!");
            return false;
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address. *email will be added to questions section of README (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the title of your project!");
            return false;
        }
    },
    {
        type: "input",
        name: "projectTitle",
        message: "What is the title of your project? (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the title of your project!");
            return false;
        }
    },
    {
        type: "confirm",
        name: "confirmTableOfContents",
        message: "Would you like to add an TableOfContents section to your project?",
        default: false
    },
    {
        type: "confirm",
        name: "confirmInstallation",
        message: "Would you like to add an installation section to your project?",
        default: false
    },
    {
        type: "input",
        name: "installation",
        message: "Provide some information in the installation section",
        when: ({confirmInstallation}) => {
            if (confirmInstallation) {
                return true;
            }
            return false;
        }
    },
    {
        type: "confirm",
        name: "confirmUsage",
        message: "Would you like to add an Usage section to your project?",
        default: false
    },
    {
        type: "input",
        name: "usage",
        message: "Provide some information in the Usage section",
        when: ({confirmUsage}) => {
            if (confirmUsage) {
                return true;
            }
            return false;
        }
    },
    {
        type: "confirm",
        name: "confirmLicense",
        message: "Would you like to add an License section to your project?",
        default: false
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license you would like to add to your project, or choose 'none' if you've changed your mind.",
        choices: ["MIT","Apache"],
        when: ({confirmLicense}) => {
            if (confirmLicense) {
                return true;
            }
            return false;
        }
    },
    {
        type: "confirm",
        name: "confirmContributing",
        message: "Would you like to add an Contributing section to your project?",
        default: false
    },
    {
        type: "input",
        name: "contributing",
        message: "Provide some information in the Contributing section",
        when: ({confirmContributing}) => {
            if (confirmContributing) {
                return true;
            }
            return false;
        }
    },
    {
        type: "confirm",
        name: "confirmTests",
        message: "Would you like to add a Tests section to your project?",
        default: false
    },
    {
        type: "input",
        name: "tests",
        message: "Provide some information in the Tests section",
        when: ({confirmTests}) => {
            if (confirmTests) {
                return true;
            }
            return false;
        }
    },
    {
        type: "confirm",
        name: "confirmQuestions",
        message: "Would you like to add a Questions section to your project?",
        default: false
    },
    {
        type: "input",
        name: "questions",
        message: "Provide some information in the Questions section",
        when: ({confirmQuestions}) => {
            if (confirmQuestions) {
                return true;
            }
            return false;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

inquirer.prompt(questions);
