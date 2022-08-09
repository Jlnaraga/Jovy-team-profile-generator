const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateHTML = require ('./generateHTML.js')


const output_dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_dir, "generatedHtml")


const myTeam = [];
const manager = [];
const engineer =[];
const intern = [];

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
        const manager = new Manager (
            val.name,
            val.id,
            val.email,
            val.officeNumber,
            val.userName
        );
        addMyteam();
    });
}
      
     
    inquirer.prompt([
    {
        type: 'list',
        name: 'addMoreMembers',
        message: 'Would you like to add another team member?',
        choices: [
            'yes',
            'no'
        ]
    }])

    .then(function({addMoreTeam, employeeInfo}) {

        let newTeam;

        if (role === 'Engineer') {

            newTeam = new Engineer( name, badgeNumber, email, userName);

        } else if (role === 'Intern') {

            newTeam= new Intern(name, badgeNumber, email, userName);

        } else if (role === 'Manager') {

            newTeam = new Manager(name, badgeNumber, email, userName);
        }

        team.push(newMember);
        
        addHTML(newMember).then(function() {

            if (addMoreMembers === "yes") {

                member();
            } else {
                endHTML();
            }

        });

    });






