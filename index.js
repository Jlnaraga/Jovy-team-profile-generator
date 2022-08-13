//const Employee = require ('./lib/employee')
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHTML = require ('./generateHTML.js')

const output_dir = path.resolve(__dirname, "output");
//const outputPath = path.join(output_dir, "generatedHtml")

const myTeam = [];
//const Manager = [];
//const Engineer =[];
//const Intern = [];

function managerData() {

    console.log('My TEAM!!!!')

    inquirer.prompt ([ 
        {
            type: "input",
            message: "What is the Manager's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the Manager's name?",
            name: "name",
            
        },
        {
            type: "input",
            message: "What is the Manager's email?",
            name: "email",
           
        },
        {
            type: "input",
            message: "What is the Manager's office number?",
            name: "officeNumber"
        }
    ])
    .then((val) => {
        const manager = new Manager(
            val.name,
            val.id,
            val.email,
            val.officeNumber
        );
        myTeam.push(manager);

        addMyteam();
    });
}
      
function addMyteam() { 
    inquirer.prompt([
        {
            type: "list",
            message: "Please choose a team member",
            choices: ["Engineer", "Intern"],  
            name: "role",
        },
        {
            type: "input",
            message: ({role}) => `What is the ${role}'s id number?`,
            name: "id",
        }, 
        {
            type: "input",
            message: ({role}) => `What is the ${role}'s name?`,
            name: "name",
        }, 
        {
            type: "input",
            message: ({role}) => `What is the ${role}'s email?`,
            name: "email",
        }, 
        {
            type: "input",
            message: ({role}) => `What is the ${role}'s github username?`,
            name: "username",
            when: (answers) => answers.role === 'Engineer'
        }, 
        {
            type: "input",
            message: ({role}) => `What is the ${role}'s school?`,
            name: "school",
            when: (answers) => answers.role === 'Intern'
        }
    ])
    .then(function({role, name, id, email, username, school}){
        inquirer.prompt([
            {
                type: 'confirm',
                message: 'Do you want to add another team member?',
                name: "addMore"
            }
        ]).then (function({addMore}) {

            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, username);
            }

            if (role === "Intern") {
                newMember = new Intern (name, id, email, school);
            }

            myTeam.push(newMember);

            if(addMore === true){
                return addMyteam();
            }
            else{
                console.log(myTeam)
            }

        })
    })
}
 
managerData()