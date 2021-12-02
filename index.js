const inquirer = require("inquirer");
const fs = require('fs');

const generateHTML = require("./src/generateHTML")
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

console.log("Please build your team: ")

const team = [];

const addManager = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the team manager's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the team manager's id?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the team manager's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the team manager's office number?",
                name: 'officeNumber',
            },
            {
                type: 'list',
                message: "Which type of team member would you like to add?",
                name: 'role',
                choices: ["Engineer", "Intern", "I don't want to add any more team members"]
            },
        ])
        .then(managerData => {
            const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
            team.push(manager)
            switch(managerData.role) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                   break;
                default:
                    writeToFile("./dist/index.html", generateHTML(team)) 
            }
            // console.log(team)
        })
}

const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the engineer's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the engineer's id?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the engineer's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the engineer's github?",
                name: 'github',
            },
            {
                type: 'list',
                message: "Which type of team member would you like to add?",
                name: 'role',
                choices: ["Engineer", "Intern", "I don't want to add any more team members"]
            },
        ])
        .then(engineerData => {
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
            team.push(engineer)
            switch(engineerData.role) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                   break;
                default:
                    writeToFile("./dist/index.html", generateHTML(team)) 
            }
            // console.log(team)
            
        })
}

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the intern's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is the intern's id?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the intern's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is the intern's school?",
                name: 'school',
            },
            {
                type: 'list',
                message: "Which type of team member would you like to add?",
                name: 'role',
                choices: ["Engineer", "Intern", "I don't want to add any more team members"]
            },
        ])
        .then(internData => {
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school)
            team.push(intern)
            switch(internData.role) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                   break;
                default:
                    writeToFile("./dist/index.html", generateHTML(team)) 
            }
            // console.log(team)
        })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("hi data", data)

    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success! The index.html was created in the dist/ folder')
    );
}

// TODO: Create a function to initialize app
function init() {
    addManager();
}

// Function call to initialize app
init();