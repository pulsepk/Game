'use strict';

const score0el = document.querySelector('#score--0');
const score1el = document.querySelector('#score--1');
const currentscore0el = document.querySelector('#current--0');
const currentscore1el = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const buttonroll = document.querySelector('.btn--roll');
const elplayer1 = document.querySelector('.player--0');
const elplayer2 = document.querySelector('.player--1');
const buttonhold = document.querySelector('.btn--hold');
let score = 0;
let activeplayer = 0;
const scores = [0,0];

score0el.textContent = 0;
score1el.textContent = 0;

dice.classList.add('hidden');



const switchPlayers = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
        activeplayer = activeplayer === 0 ? 1: 0;
        score = 0;
        console.log(activeplayer);
        document.getElementById(`current--${activeplayer}`).textContent = score;
        elplayer1.classList.toggle('player--active');
        elplayer2.classList.toggle('player--active');
}

buttonroll.addEventListener('click', function(){
    
    let random_dice = Math.trunc(Math.random()*6+1);
    dice.classList.remove('hidden');
    dice.src = `dice-${random_dice}.png`;
    

    if(random_dice!==1){
    score += random_dice;
    document.getElementById(`current--${activeplayer}`).textContent = score;
    }
    else{
        switchPlayers();
    }
    
})

buttonhold.addEventListener('click', function(){

    scores[activeplayer] += score;
    
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];
    switchPlayers();
    if(score)
})




