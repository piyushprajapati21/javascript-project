class user{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password = value.toUpperCase();
    }
}
const piyush = new user('pp@pp.com','abc');
console.log(piyush.password)