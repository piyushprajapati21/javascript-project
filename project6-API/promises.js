const promiseOne = new Promise ( function(resolve,reject) {
    // do as async task
    //db calls. network
    setTimeout(function(){
        console.log('Async task is completed...');
        resolve();
    },2000)
})
promiseOne.then(function () {
    console.log('Promise consume..');
})

// Promise 2

const promisetTwo = new Promise ( function(resolve,reject) {
    // do as async task
    //db calls. network
    setTimeout(function(){
        console.log('Async Two task is completed...');
        resolve();
    },2000)
}).then(function () {
    console.log('Promise two resolved..');
})

// promise 3

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'Promise',pwd:'JS'});
    },3000)
})

promiseThree.then(function(data) {
    console.log(data)
})

// promise 4
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true; // change true or false
        if(!error)
        {
            resolve({username:'Promise 4',pwd:'JS'});
        }else
        {
            reject('Error:wrong');
        }
    },3000)
})
promiseFour.then( (user) => {
    console.log(user)
    return user.username
} ).then( (username) => {
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(function(){
    console.log('Finally Done....')
});

// promise 5

 
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true; // change true or false
        if(!error)
        {
            resolve({username:'javascript',pwd:'12345'});
        }else
        {
            reject('Error:JS went wrong');
        }
    },3000)
})
promiseFive.then( (user) => {
    console.log(user)
    return user.username
} ).then( (username) => {
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(function(){
    console.log('Finally Done....')
});

//asunc promise 

async function promiseAsync(){  

    try {
        const response = await promiseFive 
        console.log(response) 
    } catch (error) {
        console.log(error)
    }
}
promiseAsync()

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json();
} )
.then( (data) => {
    console.log(data)
} )