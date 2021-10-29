const url ='https://api.pokerapi.dev/v1/winner/texas_holdem?cc='
document.addEventListener("DOMContentLoaded", ()=>{
    let btnBet = document.getElementsByClassName('bet')[0];
    btnBet.addEventListener('click', (e) =>{
        e.preventDefault()
        // fetch the data
        fetch(url+communityCardOne.innerText+','+communityCardTwo.innerText+','+communityCardThree.innerText+','
        +communityCardFour.innerText+','+communityCardFive.innerText+'&pc['+']='+playerCardOne.innerText+','
        +playerCardTwo.innerText+'&pc['+']='+dealerCardOne.innerText+','+dealerCardTwo.innerText)

        .then((responseData)=>{
            return responseData.json()
        })
        .then((jsonData)=>{
            console.log("JSON DATA:")
            console.log(jsonData)
        })
        .catch((error)=>{
            console.log("ERROR!!!!!")
            console.log(error)
        })
    })

// let cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
// let cardSuit = ['C', 'S', 'D', 'H']
let playerCardOne = document.querySelector('.playerCardOne')
let playerCardTwo = document.querySelector('.playerCardTwo')
let dealerCardOne = document.querySelector('.dealerCardOne')
let dealerCardTwo = document.querySelector('.dealerCardTwo')
let communityCardOne = document.querySelector('.communityCardOne')
let communityCardTwo = document.querySelector('.communityCardTwo')
let communityCardThree = document.querySelector('.communityCardThree')
let communityCardFour = document.querySelector('.communityCardFour')
let communityCardFive = document.querySelector('.communityCardFive')



let bankroll = document.querySelector('.bankroll')
let i = 0

//functions that controls card distribution
// function randomValue(){
//     return cardValue[Math.floor(Math.random()*cardValue.length)];
// }
// function randomSuit(){
//    return cardSuit[Math.floor(Math.random()*cardSuit.length)];
// }
// function dealtHand (){
//    return (randomValue()+randomSuit());
// } 
var parts = [['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'], ['C', 'S', 'D', 'H']],
    result = parts.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
var as = result.map(a => a.join(''));
console.log(as) 
var s = as.sort(func);  
function func(a, b) {  
  return 0.5 - Math.random();
}  

console.log(s);

function michelle () {
    betFunctions[i++ ]();
    if (betFunctions[i==betFunctions.length]){
        return
    }
    console.log('vegetables');
};
window.onload = function obama(){
    let btnBet = document.getElementsByClassName('bet')[0];
    btnBet.addEventListener('click', michelle)
    // btnBet.addEventListener('click', myFunction)
};

let betFunctions = [
    () => {
            playerCardOne.innerText = s[1],
            playerCardTwo.innerText = s[2],
            dealerCardOne.innerText = s[3],
            dealerCardTwo.innerText = s[4]
            var x = document.getElementById("input").value;
            document.getElementById("ante").innerHTML = `Ante: $${x}`;
            bankroll.innerText = (Number.parseInt(bankroll.innerText))- (Number.parseInt(x))
    },
    () => {
        communityCardOne.innerText = s[5],
        communityCardTwo.innerText = s[6],
        communityCardThree.innerText = s[7]
        var y = document.getElementById("input").value;
        document.getElementById("preflop").innerHTML = `Pre-Flop: $${y}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(y))
        console.log('twin dragons')
    },
    () => {
        communityCardFour.innerText = s[8]
        var z = document.getElementById("input").value;
        document.getElementById("flop").innerHTML = `Flop: $${z}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(z))
        console.log('triple dragons')
    },
    () => {
        communityCardFive.innerText = s[9]
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
        return
        //insert check win function here
        //insert subtract or add balance here
        //reveal the dealer's cards onclick here 
    }
    
    ];
})
