// fetch(url)
//   .then(response => response.json())
//   .then(price => console.log(price))
//   console.log('meat')

// // let cards = document.querySelector('#cards')
// console.log('chicken')


  //need to create function that assigns a random two part output; one from an array [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A], and array [C, S, D, H]
  //on click function must return two values that fit the format of the api
  //money value must coincide w bet value
function randomValue(){
    return cardValue[Math.floor(Math.random()*cardValue.length)];
}
let cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
var cardSuit = ['C', 'S', 'D', 'H']
function randomSuit(){
    return cardSuit[Math.floor(Math.random()*cardSuit.length)];
}

function dealtHand (){
    return randomValue()+randomSuit();
}

let playerCardOne = document.querySelector('.playerCardOne')
let playerCardTwo = document.querySelector('.playerCardTwo')
let dealerCardOne = document.querySelector('.dealerCardOne')
let dealerCardTwo = document.querySelector('.dealerCardTwo')
let communityCardOne = document.querySelector('.communityCardOne')
let communityCardTwo = document.querySelector('.communityCardTwo')
let communityCardThree = document.querySelector('.communityCardThree')
let communityCardFour = document.querySelector('.communityCardFour')
let communityCardFive = document.querySelector('.communityCardFive')

// let bankroll = document.querySelector ('bankroll')
// let moneyInTheBank = document.querySelector('myNumber')
// function modifyMoney () {
//     bankroll.innerHTML - moneyInTheBank
// }
// modifyMoney()

// let checkFunctions = [
//     function(){
//         communityCardOne.innerText = dealtHand()
//         communityCardTwo.innerText = dealtHand()
//         communityCardThree.innerText = dealtHand()
//     },
//     function(){ 
//         communityCardFour.innerText = dealtHand()
//     },
//     function(){
//         communityCardFive.innerText = dealtHand()
//     }
// ];
let money = 250
let moneyCounter = document.querySelector ('.bankroll')

let i = 0;
window.onload = function obama(){
    let btnBet = document.getElementsByClassName('bet')[0];
    btnBet.onclick = 
        function () {
        betFunctions[i++ % betFunctions.length]();
        console.log('vegetables')
    }
    
    
}
let betFunctions = [
    function() {
        playerCardOne.innerText = dealtHand()
        playerCardTwo.innerText = dealtHand()
        dealerCardOne.innerText = dealtHand()
        dealerCardTwo.innerText = dealtHand()
        moneyCounter.innerText = money
    },
    function(){
        communityCardOne.innerText = dealtHand()
        communityCardTwo.innerText = dealtHand()
        communityCardThree.innerText = dealtHand()
    },
    function(){ 
        communityCardFour.innerText = dealtHand()
    },
    function(){
        communityCardFive.innerText = dealtHand()
    },
];






// function theFlop (){
    
// }
// function theTurn(){ 
//     
// }
// function theRiver(){
//     
// }
// cardDraw()
// theFlop()
// theTurn()
// theRiver()

//need to hide dealer cards until after the river function
//need to include a rules popup button
//on click function the flop, the turn, 
//if any of the cards are equal to each other, they have to be recycled 
// let url = 'https://api.pokerapi.dev/v1/winner/texas_holdem?cc=['+deltHand+dealtHand+dealtHand+dealtHand+dealtHand+']&pc[]=&pc[]'

// console.log(url)

// array of functions
// window.onload = function biden (){
//     let btnCheck = document.getElementsByClassName('check')[0];
//     btnCheck.onclick = function(){
//         checkFunctions[i++ % checkFunctions.length]();
//     }
// }
// function kamala (){
//     let btnFold = document.getElement 
