function userInfo(name,count,isloginInfo)
{
    this.username = name;
    this.count = count;
    this.logininfo = isloginInfo;
    return this;
}

const users = userInfo('piyush',10,'login');
console.log(users);

const newHero = ['hul','superman'];
console.log(newHero)

function multipleby5(num) {
    return num * 3;
}
console.log(multipleby5(5))
console.log(multipleby5.prototype)
console.log(multipleby5.power)
