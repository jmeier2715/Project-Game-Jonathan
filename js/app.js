

// fetch(url)
//   .then(response => response.json())
//   .then(price => console.log(price))
//   console.log('meat')

// // let cards = document.querySelector('#cards')
// console.log('chicken')


  //need to create function that assigns a random two part output; one from an array [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A], and array [C, S, D, H]
  //on click function must return two values that fit the format of the api
  //money value must coincide w bet value
var cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
function randomValue(){
    return cardValue[Math.floor(Math.random()*cardValue.length)];
}

var cardSuit = ['C', 'S', 'D', 'H']
function randomSuit(){
    return cardSuit[Math.floor(Math.random()*cardSuit.length)];
}

function dealtHand (){
    return randomValue()+randomSuit();
}
console.log(dealtHand())
console.log(dealtHand())

let playerCardOne = document.querySelector('.playerCardOne')
let playerCardTwo = document.querySelector('.playerCardTwo')
let dealerCardOne = document.querySelector('.dealerCardOne')
let dealerCardTwo = document.querySelector('.dealerCardTwo')
let communityCardOne = document.querySelector('.communityCardOne')
let communityCardTwo = document.querySelector('.communityCardTwo')
let communityCardThree = document.querySelector('.communityCardThree')
let communityCardFour = document.querySelector('.communityCardFour')
let communityCardFive = document.querySelector('.communityCardFive')


function cardDraw () {
    playerCardOne.innerText = dealtHand()
    playerCardTwo.innerText = dealtHand()
    dealerCardOne.innerText = dealtHand()
    dealerCardTwo.innerText = dealtHand()
    
}
function theFlop (){
    communityCardOne.innerText = dealtHand()
    communityCardTwo.innerText = dealtHand()
    communityCardThree.innerText = dealtHand()
}
function theTurn(){ 
    communityCardFour.innerText = dealtHand()
}
function theRiver(){
    communityCardFive.innerText = dealtHand()
}
cardDraw()
theFlop()
theTurn()
theRiver()

//need to hide dealer cards until after the river function
//need to include a rules popup button
//on click function the flop, the turn, 
//if any of the cards are equal to each other, they have to be recycled 
// let url = 'https://api.pokerapi.dev/v1/winner/texas_holdem?cc=['+deltHand+dealtHand+dealtHand+dealtHand+dealtHand+']&pc[]=&pc[]'

// console.log(url)

// //assign 