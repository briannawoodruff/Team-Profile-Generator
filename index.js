const inquirer = require("inquirer");
// const fs = require('fs');

// const generateHTML = require("../src/generateHTML")
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

console.log("Please build your team: ")

const team = [];

const addEmployee = () => {
    inquirer
        .prompt ([
            {
                type: 'list',
                message: "Which type of team member would you like to add?",
                name: 'role',
                choices: ["Manager", "Engineer", "Intern", "I don't want to add any more team members"]
            },
        ])
        .then (employeeData => {
            switch(employeeData.role) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                // case "I don't want to add any more team members":
                // writeToFile('dist/index.html', generateHTML(team))
                // break;
                // default: 
                // writeToFile('dist/index.html', generateHTML(team))
            }
        })
}

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
        ])
        .then(managerData => {
            const manager = new Manager(managerData.id, managerData.name, managerData.email, managerData.officeNumber)
            team.push(manager)
            console.log(team)
            addEmployee();
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
        ])
        .then(engineerData => {
            const engineer = new Engineer(engineerData.id, engineerData.name, engineerData.email, engineerData.github)
            team.push(engineer)
            console.log(team)
            addEmployee();
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
                name: 'github',
            },
        ])
        .then(internData => {
            const intern = new Intern(internData.id, internData.name, internData.email, internData.school)
            team.push(intern)
            console.log(team)
            addEmployee();
        })
}

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     const html = generateHTML(data);
//     console.log(html)

//     fs.writeFile(fileName, html, (err) =>
//       err ? console.log(err) : console.log('Success! index.html created in the dist/ folder')
//     );
// }

// TODO: Create a function to initialize app
function init() {
    addEmployee();
    // writeToFile("./dist/index.html", data)
}

// Function call to initialize app
init();