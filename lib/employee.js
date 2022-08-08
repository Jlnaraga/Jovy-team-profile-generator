
class employee {
constructor (name, badgeNumber, email, userName){
    this.name = name;
    this.badgeNumber = badgeNumber;
    this.email = email;
    this.userName = userName;
}
getName(){
    return this.name;
}
getBadgenumber(){
    return this.badgeNumber;
}
getEmail(){
    return this.email;
}
getUsername(){
    return this.userName;
}

}