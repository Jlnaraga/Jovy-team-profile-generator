const Employee = require ('./employee')

class Intern extends employee {
    constructor (name, badgeNumber, email, userName){
        super(name,badgeNumber,email);
        this.school = school;
    }
    getRole(){
        return Intern;
    }
}

module.exports = Intern;