'use strict';

let randomNumber = Number(Math.floor((Math.random() * 20 )+1));
let input = document.querySelector(".guess");
let check = document.querySelector(".check");
let message = document.querySelector('.message');
let body = document.querySelector('body');
let number = document.querySelector('.number');
let highScore = document.querySelector('.highscore');
let restart = document.querySelector('.again');
let score = 20;
let messageText = function(index){
    document.querySelector('.message').innerHTML = index;
};

check.addEventListener("click" , function(){
    
    if( !input.value){
        messageText("Please Enter a Number...");
    }else{
        if(input.value == randomNumber){
            messageText("Correct Answer...");
            body.style.backgroundColor= 'green';
            number.innerHTML = randomNumber;
            number.style.width= '30rem';
            if(score > highScore.innerHTML){
                // console.log("It is bigger than that")
                highScore.innerHTML = score;
            }
        }else if(input.value !== randomNumber){
            if(input.value > 0){
                messageText(randomNumber < input.value ? 'Too high...' : 'Too low...');
                score -- ;
                input.value = '';
                if(score < 0){
                    messageText('You Lose the Game...');  
                    score = 0;
                }
                document.querySelector('.score').innerHTML = score;
            }
        }
        
        
        // else if(input.value > randomNumber){
        //     message.innerHTML = 'Too High... ';
        //     score--;
        //     if(score < 0){
        //         score = 0;
        //     }
        //     input.value = '';

        //     document.querySelector('.score').innerHTML = score;
        // }else if(input.value < randomNumber){
        //     message.innerHTML = 'Too Low...';
        //     score--;
        //     if(score < 0){
        //         score = 0;
        //     }
        //     input.value = '';

        //     document.querySelector('.score').innerHTML = score;
        // }
    }

});



restart.addEventListener('click' , function(){
    score = 20;
    randomNumber = Number(Math.floor((Math.random() * 20 )+1));
    input.value = '';
    messageText('Start guessing...') ;
    body.style.backgroundColor = '#222'
    document.querySelector('.score').innerHTML = 20;
    number.textContent = '?';
    number.style.width= '15rem';
    // console.log(randomNumber)
});

// console.log(randomNumber);

