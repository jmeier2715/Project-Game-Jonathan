let gameIsWon = true
let cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let cardSuit = ['C', 'S', 'D', 'H']
let playerCardOne = document.querySelector('.playerCardOne')
let playerCardTwo = document.querySelector('.playerCardTwo')
let dealerCardOne = document.querySelector('.dealerCardOne')
let dealerCardTwo = document.querySelector('.dealerCardTwo')
let communityCardOne = document.querySelector('.communityCardOne')
let communityCardTwo = document.querySelector('.communityCardTwo')
let communityCardThree = document.querySelector('.communityCardThree')
let communityCardFour = document.querySelector('.communityCardFour')
let communityCardFive = document.querySelector('.communityCardFive')

//functions that controls card distribution
function randomValue(){
    return cardValue[Math.floor(Math.random()*cardValue.length)];
}
function randomSuit(){
   return cardSuit[Math.floor(Math.random()*cardSuit.length)];
}
function dealtHand (){
   return randomValue()+randomSuit();
}

let bankroll = document.querySelector('.bankroll')
var input = document.querySelector('input')
let i = 0


function michelle () {
    betFunctions[i++ % betFunctions.length]();
    console.log('vegetables');
};
window.onload = function obama(){
    let btnBet = document.getElementsByClassName('bet')[0];
    btnBet.addEventListener('click', michelle)
    // btnBet.addEventListener('click', myFunction)
}

let betFunctions = [
    () => {
        playerCardOne.innerText = dealtHand();
        playerCardTwo.innerText = dealtHand();
        dealerCardOne.innerText = dealtHand();
        dealerCardTwo.innerText = dealtHand();
        var x = document.getElementById("input").value;
        document.getElementById("ante").innerHTML = `Ante: $${x}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))- (Number.parseInt(x))
        console.log('dragons')
        
        

    },
    () => {
        communityCardOne.innerText = dealtHand();
        communityCardTwo.innerText = dealtHand();
        communityCardThree.innerText = dealtHand();
        var y = document.getElementById("input").value;
        document.getElementById("preflop").innerHTML = `Pre-Flop: $${y}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(y))
        console.log('twin dragons')
        
    },
    () => {
        communityCardFour.innerText = dealtHand();
        var z = document.getElementById("input").value;
        document.getElementById("flop").innerHTML = `Flop: $${z}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(z))
        console.log('triple dragons')
    },
    () => {
        communityCardFive.innerText = dealtHand();
        var a = document.getElementById("input").value;
        document.getElementById("turn").innerHTML = `Turn: $${a}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(a))
        console.log('quad dragons')
    },
    () => {
        var b = document.getElementById("input").value;
        document.getElementById("river").innerHTML = `River: $${b}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(b))
        console.log('quint dragons')

        //check win (){
            //
        //}
        return
        //insert check win function here
        //insert subtract or add balance here
        //reveal the dealer's cards onclick here 
    }
    
];
console.log(preflop.innerText)
//need to hide dealer cards until after the river function
//need to include a rules popup button
//on click function the flop, the turn, 
//if any of the cards are equal to each other, they have to be recycled 
// let url = 'https://api.pokerapi.dev/v1/winner/texas_holdem?cc=['+deltHand+dealtHand+dealtHand+dealtHand+dealtHand+']&pc[]=&pc[]'


// let ante = document.getElementById('ante')
// console.log(ante.innerHTML)

// var money = (bankroll.innerText) - (ante.innerText)




// };
// function sumOfBets (){
//     parseInt(x) + parseInt(y) + parseInt(z) + parseInt(a) + parseInt(b)
// }
// var x = document.getElementById("input").value;
// console.log(x)
// var y = document.getElementById("input").value;
// console.log(y)
// var z = document.getElementById("input").value;
// console.log(z)
// var b = document.getElementById("input").value;
// console.log(b)
// var a = document.getElementById("input").value;
// console.log(a)
// // sumOfBets()