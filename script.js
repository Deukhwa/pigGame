'use strict';

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');
const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

let currentScore = 0;
let currentTurn = 0;
let currentTotal1 = 0;
let currentTotal2 = 0;

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', () => {
    let randomNumber = Math.trunc(Math.random()*6) + 1;
    
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomNumber}.png`;
    
    // When a number is 1
    if(randomNumber === 1) {
        if(currentTurn % 2 === 0) {
            currentTotal1 += currentScore;
            score1.textContent = currentTotal1;
            current1.textContent = '0';
            currentScore = 0;
            currentTurn++
        } else {
            currentTotal2 += currentScore;
            score2.textContent = currentTotal2;
            current2.textContent = '0';
            currentScore = 0;
            currentTurn++
        }
    // When a number is not 1
    } else {
        currentScore += randomNumber;
        
        if(currentTurn % 2 === 0) {
            current1.textContent= currentScore;
        } else {
            current2.textContent= currentScore;
        }
    } 

})

btnHold.addEventListener('click', () => {
    if(currentTurn % 2 === 0) {
        currentTotal1 += currentScore;
        score1.textContent = currentTotal1;
        current1.textContent = '0';
        currentScore = 0;
        currentTurn++
    } else {
        currentTotal2 += currentScore;
        score2.textContent = currentTotal2;
        current2.textContent = '0';
        currentScore = 0;
        currentTurn++
    }

})

btnNew.addEventListener('click', () => {
    currentScore = 0;
    currentTurn = 0;
    currentTotal1 = 0;
    currentTotal2 = 0;

    current1.textContent = currentScore
    current2.textContent = currentScore
    score1.textContent = currentTotal1
    score2.textContent = currentTotal2
})