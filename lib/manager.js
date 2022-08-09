const Employee = require ('./employee')

class Manager extends employee {
    constructor (name, badgeNumber, email, userName){
        super(name,badgeNumber,email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return Manager
    }
}
module.exports = Intern;