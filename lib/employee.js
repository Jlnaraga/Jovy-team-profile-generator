
class employee {
constructor (name, id, email, userName, officeNumber, school){
    this.name = name;
    this.badgeNumber = id;
    this.email = email;
    this.gitHub = userName;
    this.officeNumber = officeNumber;
    this.school = school
}
getName(){
    return this.name;
}
getId(){
    return this.id;
}
getEmail(){
    return this.email;
}
getGithub(){
    return this.userName;
}

}