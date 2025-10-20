
    let attempts = 5;
    let randomNumber = Math.floor(Math.random() * 10) ;

function numberGuess(){
    let userInput = parseInt(document.getElementById("userInput").value);
    let gameOver = false;
        if (gameOver == true) return;
         if(userInput == randomNumber && attempts >= 1){
            alert(`Congratulations, you guesed it right. You have ${attempts} attempts left`)
            gameOver = true;
        }else if(userInput > randomNumber && attempts >= 1){
            alert(`oops try a smaller number. You have ${attempts} attempts left`)
        }else if(userInput < randomNumber && attempts >= 1){
            alert(`oops try a larger number.  You have ${attempts} attempts left`)
        }else if(attempts == 0){
            alert('You have exhausted your attempts');
            document.getElementById("userInput").disabled = true;
            document.querySelector('.submit').disabled = true;
            userInput = '';
            gameOver = true;
        }
        else{
             alert('please enter a number')
        }
        attempts--
        console.log(attempts, 'attempts');
        
       console.log(randomNumber);
    
}


//if nothing is inputed it should alert "please enter a number"
//if the number is small/large it should alert "oops try a smaller/larger number", you have 4 guesses left
//if the number is correct it should alert "congratulations you guessed it right"
//it should also tell you how many attempts left