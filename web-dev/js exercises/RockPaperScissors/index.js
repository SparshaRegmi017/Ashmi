const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultText = document.getElementById('result');
let win=0;
let lost=0;

const getComputerChoice=()=>{
    let prob=['rock','paper','scissors']
    const choiceNumber = Math.floor(Math.random()*3);
    let compChoice=prob[choiceNumber]
    return compChoice;
}
function getWinner(userChoice,compChoice){
    if(userChoice==compChoice){
        document.querySelector('#result').innerHTML=`It's a tie`;
    }else if(userChoice=='rock' && compChoice=='scissors' || userChoice=='paper' && compChoice=='rock' || userChoice=='scissors' && compChoice=='paper'){
        document.querySelector('#result').innerHTML=`You won`;
        
        }
        else{
            document.querySelector('#result').innerHTML=`You Loose`;
        lost++
        }
    }

function playGame(userChoice){
let compChoice=getComputerChoice();
document.querySelector('#youchose').innerHTML=`You cho0se: ${userChoice}`
document.querySelector('#compchose').innerHTML=`Comp choose: ${compChoice}`
console.log('You Choose: '+ userChoice)
console.log('Comp Choose '+ compChoice) 
getWinner(userChoice,compChoice)
}

rockBtn.addEventListener('click', function () {
    playGame('rock');
  });
  
  paperBtn.addEventListener('click', function () {
    playGame('paper');
  });
  
  scissorsBtn.addEventListener('click', function () {
    playGame('scissors');
  });
  



