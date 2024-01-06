let myName = 'piyush   ';

console.log(myName.length)

let myHero = ['thor','spiderman'];

let heroPower = {
    thore:'hammer',
    spriderman:'sling',

    getHeroPower : function(){
        console.log('Spidy power id ${this.spiderman}')
    }
}

heroPower.prototype.piyush = function(){
    console.log('Present in all objects')
}

 getHeroPower.piyush();