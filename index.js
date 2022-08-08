const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


const myTeam = [];
additonalTeam();
function init(){
    generateHTML();
}

function additonalTeam(){
    inquirer.prompt ([ 
        {
            type: "input",
            message: "What is the employee's name?",
            answer: "name",
            
        },
        {
            type: "input",
            message: "ID badge number",
            name: "badgeNumber",
            
        },
        {
            type: "input",
            message: "What's the Email address",
            name: "email",
           
        },
        {
            type: "input",
            message: "What type of employee?",
            choices: [
                "Manager",
                "Engineer",
                "intern"
            ],
            name: "role"
            
        },
        {
            type: "input",
            message:"Github Username",
            name: "userName",
        },
    ])
    .then(function ({name, badgeNumber, email, role, userName}) {
        let employeeInfo = "";

        if (role === 'Engineer') {
            employeeInfo = 'gitHub userName';
        } else if (role === 'Intern') {
            employeeInfo = 'gitHub userName'
        } else {
            employeeInfo = 'gitHub userName'
        }
    })
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

};




