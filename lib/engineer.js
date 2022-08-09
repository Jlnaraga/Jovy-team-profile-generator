const Employee = require ('./employee')

class Engineer extends employee {
    constructor (role, name, id, email, userName){
        super(role, name, id,email, userName);
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