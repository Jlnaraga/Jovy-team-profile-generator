const Employee = require ('./lib/employee')
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
    inquirer.prompt ([ 
        {
            type: "input",
            message: "Manager's name?",
            answer: "name",
            
        },
        {
            type: "input",
            message: "Manager's id",
            name: "id",
            
        },
        {
            type: "input",
            message: "Enter's Email address",
            name: "email",
           
        },
        {
            type: "input",
            message: "Manager's office number",
            name: "officeNumber"
            
        },
        {
            type: "input",
            message:"Github Username",
            name: "userName",
        },
    ])
    .then((val) => {
        const Manager = new Manager (
            val.name,
            val.id,
            val.email,
            val.officeNumber,
            val.userName
        );
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
            message:"Please enter team member's name",
            name: "name",
        },
        {
            type: "input",
            message: "Please input member id",
            name: "id",
            
        },
        {
            type: "input",
            message: "Enter's Email address",
            name: "email",
           
        },
        {
            type: "input",
            message:"Github Username",
            name: "userName",
        },
    ])

        .then(function({role, name, id, email, userName}){
            let roleData = "";
            if (role === "Engineer") {
                roleData = "gitHub userName";
            }else if ( role === "Intern" ) {
                roleData = "School Name";
            }
            
            inquirer.prompt([{
                message: `Enter team member's ${roleData}`,
                name: "roleData"
            },
            {
                type: 'list',
                message: 'Do you want to add another team member?',
                choices: ['yes','no'],
                name: "members"
            }])
            .then (function({roleData, members}) {
                let newMember;
                if (role === "Engineer") {
                    newMember = new Engineer(role, name, id, email, userName);
            } else if (role === "Manager") {
                    newMember = new Manager (role, name, id, email, userName);
            }else {
                newMember = new Intern (role, name, id, email, userName);
            }
            employees.push(newMember);
        })
    })
}
    

    








