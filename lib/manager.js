const Employee = require ('./employee')

class Manager extends employee {
    constructor (name, id, email, officeNumber,userName){
        super(name, id, email, officeNumber, userName);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return Manager
    }
}
module.exports = Intern;