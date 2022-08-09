const Employee = require ('./employee')

class Intern extends employee {
    constructor (role, name, id, email, userName, school){
        super( role, name, id,email, userName, school);
        this.school = school;
    }
    getRole(){
        return Intern;
    }
}

module.exports = Intern;