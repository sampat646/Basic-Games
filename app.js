const score = document.getElementById('score');
const userchoisedisplay = document.getElementById('user-choise');
const computerchoisedisplay = document.getElementById('computer-choise');
const possiblechoises = document.querySelectorAll('button');
let  userch;
let computerch;
possiblechoises.forEach(possiblechoise => possiblechoise.addEventListener('click',(e)=>{
    userch = e.target.id;
    userchoisedisplay.innerHTML=userch;
    genearatecomputerchoice();
    getresult();
}));
function genearatecomputerchoice(){
    const randomNUmber = Math.floor(Math.random()*3)+1;
    console.log(randomNUmber);
    if (randomNUmber===1) {
        computerch='rock'
    }
    if (randomNUmber===2) {
        computerch='paper'
    }
    if (randomNUmber===3) {
        computerch='sisseor'
    }
    computerchoisedisplay.innerHTML=computerch;
}
 function getresult(){
    if (userch===computerch) {
        score.innerHTML="it'draw";
    }
    if(computerch === 'paper' && userch ==='rock'){
        score.innerHTML="computer wins";
    }
    if(computerch === 'sisseor' && userch ==='paper'){
        score.innerHTML="computer wins";
    }
    if(computerch === 'rock' && userch ==='sisseor'){
        score.innerHTML="computer wins";
    }
    if(computerch === 'rock' && userch ==='paper'){
        score.innerHTML="you wins";
    }
    if(computerch === 'paper' && userch ==='sisseor'){
        score.innerHTML="you wins";
    }
    if(computerch === 'sisseor' && userch ==='rock'){
        score.innerHTML="you wins";
    }
    
 }