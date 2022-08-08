const Engineer = require('');
const Intern = require('');
const Manager = require('');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


const crew = [];
additonalCrew();

function additonalCrew(){
    inquirer.prompt ([ 
        {
            type: "list",
            name: "addEmployee",
            message: "Select am Employee",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ]
        }
    ])
}