//API request
const url ='https://api.pokerapi.dev/v1/winner/texas_holdem?cc='
    document.addEventListener("DOMContentLoaded", ()=>{
        let btnBet = document.getElementsByClassName('bet')[0];
        btnBet.addEventListener('click', e => {
                    e.preventDefault()
                    // fetch the data
                    fetch(url+s[5]+','+s[6]+','+s[7]+','
                    +s[8]+','+s[9]+'&pc['+']='+s[1]+','
                    +s[2]+'&pc['+']='+s[3]+','+s[4])
                    .then((response)=>{
                        return response.json()
                        
                    })
                    .then((jsonData)=>{ 
                        jsonData.winners.forEach(appendData)
                    })
                    .catch((error)=>{
                        console.log("ERROR!!!!!")
                        console.log(error)
                    })
                    const appendData = (person) =>{
                        let li = document.getElementById("jsonResponse")
                        li.textContent = `${person.cards}`
                        } 
            })
//defining our variables    
    let cardOne = document.getElementById('cardOne')
    let cardTwo = document.getElementById('cardTwo')
    let cardThree = document.getElementById('cardThree')
    let cardFour = document.getElementById('cardFour')
    let cardFive = document.getElementById('cardFive')
    let cardSix = document.getElementById('cardSix')
    let cardSeven = document.getElementById('cardSeven')
    let cardEight = document.getElementById('cardEight')
    let situation = document.querySelector('.situation')
    let bankroll = document.querySelector('.bankroll')
    let i = 0     
//function that resets our JSON output to its "original" position
function reset () {
    let JSON = document.getElementById("jsonResponse"),
        displayValue = "";
        if (JSON.style.display == "")
        displayValue = "none";
        JSON.style.display = displayValue;
        }

//functions that controls card distribution
    let parts = [['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'], ['C', 'S', 'D', 'H']],
        result = parts.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
    let as = result.map(a => a.join('')) 
    let s = as.sort(func)

function func(a, b) {  
  return 0.5 - Math.random()
} 

function clickFunctions () {
    betFunctions[i++]();
    console.log(i)
    if (betFunctions[i==betFunctions.length]){
        return
    }
}   
let outcome = document.querySelector('outcome')
console.log(outcome)

function fold (){
    bankroll.innerText = Number.parseInt(bankroll.innerText)
    let s = as.sort(func)
    console.log(s);  
    function func(a, b) {  
    return 0.5 - Math.random();
    }
    function buttonReset (){
        i=0
    }
    buttonReset()
    // playerCardOne.innerText = 'playerCardOne',
    // playerCardTwo.innerText = 'playerCardTwo',
    // dealerCardOne.innerText = 'dealerCardOne',
    // dealerCardTwo.innerText = 'dealerCardTwo'            
    // // communityCardOne.innerText = 'communityCardOne',
    // // communityCardTwo.innerText = 'communityCardTwo',
    // // communityCardThree.innerText = 'communityCardThree',
    // // communityCardFour.innerText = 'communityCardFour',
    // // communityCardFive.innerText = 'communityCardFive'

    jsonResponse.innerText

    document.getElementById('outcome').innerHTML = 'hello'

    document.getElementById("ante").innerHTML = 'Ante:'
    document.getElementById("preflop").innerHTML = 'Preflop:'
    document.getElementById("flop").innerHTML = 'Flop:'
    document.getElementById("turn").innerHTML = 'Turn:'
    document.getElementById("river").innerHTML = 'River:'
    
    situation.innerText='Place Your Bets'

}

window.onload = function obama(){
    let btnBet = document.getElementsByClassName('bet')[0];
    btnBet.addEventListener('click', clickFunctions)
    let btnfold = document.getElementsByClassName('igiveup')[0];
    btnfold.addEventListener('click', fold)
   
};
reset ()

let betFunctions = [
    () => {
            // playerCardOne.innerText = s[1],
            // card.src= 'cards/2C.svg'
            cardOne.src =`cards/${s[1]}.svg`
           
            // playerCardTwo.innerText = s[2]
            cardTwo.src =`cards/${s[2]}.svg`
            cardThree.src=('cards/BLUE_BACK.svg')
            cardFour.src=('cards/BLUE_BACK.svg')
            let x = parseInt(document.getElementById("input").value);
            document.getElementById("ante").innerHTML = `Ante: $${x}`;
            bankroll.innerText = (Number.parseInt(bankroll.innerText))- (Number.parseInt(x))
            // console.log(Number.parseInt(x))
            document.getElementById('outcome').innerHTML = parseInt(x)
            
            
    },
    () => {
        // communityCardOne.innerText = s[5],
        cardFive.src =`cards/${s[5]}.svg`
        // communityCardTwo.innerText = s[6],
        cardSix.src =`cards/${s[6]}.svg`
        // communityCardThree.innerText = s[7]
        cardSeven.src =`cards/${s[7]}.svg`
        let y = document.getElementById("input").value;
        document.getElementById("preflop").innerHTML = `Preflop $${parseInt(y)}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(y))
        // document.getElementById('outcome').innerHTML = parseInt(x)+ parseInt(y)
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+parseInt(y)
        console.log('twin dragons')
        
        
    },
    () => {
        // communityCardFour.innerText = s[8]
        cardEight.src =`cards/${s[8]}.svg`
        let z = document.getElementById("input").value;
        document.getElementById("flop").innerHTML = `Flop: $${z}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(z))
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+parseInt(z)
        console.log('triple dragons')
       
    },
    () => {
        // communityCardFive.innerText = s[9]
        cardNine.src =`cards/${s[9]}.svg`
        let a = document.getElementById("input").value;
        document.getElementById("turn").innerHTML = `Turn: $${a}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(a))
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+parseInt(a)
        console.log('quad dragons')
        
    },
    () => {
        dealerCardOne.innerText = s[3],
        dealerCardTwo.innerText = s[4]
        let b = document.getElementById("input").value;
        document.getElementById("river").innerHTML = `River: $${b}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(b))
        console.log('quint dragons')
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+parseInt(b)
        btnBet.innerText='Click to Play Again'
        reset ()
        function checkLoss (){
            if(bankroll.innerText <= '0'){
                situation.innerText='Out of Money? Time to Hit the ATM!'
            }
        }
        checkLoss()
        if ((playerCardOne.innerText+','+playerCardTwo.innerText) == (jsonResponse.innerText)){
            situation.innerText='Nice Win!'
        }
        else {
            situation.innerText='Maybe next time'
        }
        checkLoss()
    }, 
    () => { 
        winCheck()
        function winCheck (){
        if ((playerCardOne.innerText+','+playerCardTwo.innerText) == (jsonResponse.innerText)){
            let s = as.sort(func)
            console.log(s);  
            function func(a, b) {  
            return 0.5 - Math.random();
            }
            function buttonReset (){
                i=0
            }
            buttonReset()
            playerCardOne.innerText = 'playerCardOne',
            playerCardTwo.innerText = 'playerCardTwo',
            dealerCardOne.innerText = 'dealerCardOne',
            dealerCardTwo.innerText = 'dealerCardTwo'            
            // // communityCardOne.innerText = 'communityCardOne',
            // // communityCardTwo.innerText = 'communityCardTwo',
            // // communityCardThree.innerText = 'communityCardThree',
            // // communityCardFour.innerText = 'communityCardFour',
            // // communityCardFive.innerText = 'communityCardFive'
            bankroll.innerText = (Number.parseInt(bankroll.innerText))+(2 * (Number.parseInt(document.getElementById('outcome').innerHTML)))
            
            jsonResponse.innerText =('hello')
            document.getElementById('outcome').innerHTML = 'hello'
            document.getElementById("ante").innerHTML = 'Ante:'
            document.getElementById("preflop").innerHTML = 'Preflop:'
            document.getElementById("flop").innerHTML = 'Flop:'
            document.getElementById("turn").innerHTML = 'Turn:'
            document.getElementById("river").innerHTML = 'River:'
            situation.innerText='Place Your Bets'
        }
        else{
            bankroll.innerText = Number.parseInt(bankroll.innerText)
            let s = as.sort(func)
            console.log(s);  
            function func(a, b) {  
            return 0.5 - Math.random();
            }
            function buttonReset (){
                i=0
            }
            buttonReset()
            playerCardOne.innerText = 'playerCardOne',
            playerCardTwo.innerText = 'playerCardTwo',
            dealerCardOne.innerText = 'dealerCardOne',
            dealerCardTwo.innerText = 'dealerCardTwo'            
            // // communityCardOne.innerText = 'communityCardOne',
            // // communityCardTwo.innerText = 'communityCardTwo',
            // // communityCardThree.innerText = 'communityCardThree',
            // // communityCardFour.innerText = 'communityCardFour',
            // // communityCardFive.innerText = 'communityCardFive'

            jsonResponse.innerText

            document.getElementById('outcome').innerHTML = 'hello'

            document.getElementById("ante").innerHTML = 'Ante:'
            document.getElementById("preflop").innerHTML = 'Preflop:'
            document.getElementById("flop").innerHTML = 'Flop:'
            document.getElementById("turn").innerHTML = 'Turn:'
            document.getElementById("river").innerHTML = 'River:'
            
            situation.innerText='Place Your Bets'
            
            }
        }
        reset ()
        btnBet.innerText = 'Bet'
        
}
    
    ];
    
})