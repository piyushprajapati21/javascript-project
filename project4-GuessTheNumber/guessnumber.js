const randNum =  parseInt(Math.random() * 100 +1) 
const submit = document.querySelector('#submit');

const previous = document.querySelector('#previous');
const remain = document.querySelector('#remain');
const result = document.querySelector('#result');

const p = document.createElement('p');

let  previousGuess = [];
let numGuess = 1;
let playGame = true;

 
submit.addEventListener('click', (e) => {
    e.preventDefault();
    result.innerHTML = '';
    const guessNumber = document.getElementById('guessnumber').value;
    validateGuess(guessNumber);
})

function validateGuess(guessNumber) {
    if(guessNumber<=0 || isNaN(guessNumber) || guessNumber>100 )
    {
        result.innerHTML = `<span class="text-danger">Invalid given ${guessNumber} number</span>`
        return false;
    }
    else{
        if(guessNumber==11)
        {
            result.innerHTML = `<span class="text-success">Congratulations !!!  You guess correct ${guessNumber} number</span>`;
            previousGuess = [];
            document.getElementById("guessnumber").disabled = true;
            remain.innerHTML = 0;
            return true;
        }
        else{
            result.innerHTML = `<span class="text-danger">Fail .. You guess in-correct ${guessNumber} number</span>`;
            document.getElementById("guessnumber").value = "";

            previousGuess.push(guessNumber);
            lastelement = previousGuess.slice(-1);
            let cntGuesses = parseInt(10) - parseInt( previousGuess.length);
            //alert(10 +'-'+  previousGuess.length+' =' +cntGuesses)
            if(previousGuess.length>0)
            {
                if(previousGuess.length>=10)
                {
                    result.innerHTML = `<span class="text-danger">You have finished Guesses limit. Please refresh the page</span>`;
                    document.getElementById("guessnumber").disabled = true;

                    endGame();
                }
                remain.innerHTML = cntGuesses;
            }
            if(!isNaN(lastelement))
            {
                //alert(lastelement);
                previous.innerHTML = previousGuess.toString(); 
            }
            console.log(previousGuess); 
        }
    }
    
    
}

function checkGuess(){

}

function displayMessage(msg) {

}

function newGame() {

}

function endGame() {
   //alert('please refresh the page');
}