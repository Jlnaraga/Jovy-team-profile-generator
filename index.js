const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require('./lib/class/Engineer');
const Intern = require('./lib/class/Intern');
const Manager = require('./lib/class/Manager');

const generateHTML = require ('./lib/generateHTML.js')

const myTeam = [];

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
                
                if (fs.existsSync("./dist") === false) {
                    fs.mkdirSync("./dist", {
                        recursive: true
                    });
                }

                const html = generateHTML(myTeam);
                fs.writeFile("./dist/index.html", html,  function(err, result) {
                    if(err) console.log('error', err);
                });
            }

        })
    })
}


 
managerData()