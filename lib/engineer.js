const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name, id, email, username){
        super(name, id, email, "Engineer");
        
        this.username = username;
 
    }
    getGitHubUsername(){
        return this.username;
    }
};

module.exports = Engineer