const Employee = require ('./employee')

class Engineer extends employee {
    constructor (name, badgeNumber, email, userName){
        super(name,badgeNumber,email);
        this.userName = userName
    }
    getRole (){
        return 'Engineer';
    }
    getUsername(){
        return this.userName;
    }
    }

    module.exports = Engineer