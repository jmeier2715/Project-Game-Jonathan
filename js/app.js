const url ='https://api.pokerapi.dev/v1/winner/texas_holdem?cc='
document.addEventListener("DOMContentLoaded", ()=>{
    form.addEventListener('click', (e) =>{
         e.preventDefault()
         // fetch the data
         fetch(url+s[5]+','+s[6]+','+s[7]+','
         +s[8]+','+s[9]+'&pc['+']='+s[1]+','
         +s[2]+'&pc['+']='+s[3]+','+s[4])
   
         .then((response)=>{
             return response.json()
             
         })
         .then((jsonData)=>{ 
             console.log(jsonData.winners)
             jsonData.winners.forEach(appendData)
         })
         .catch((error)=>{
             console.log("ERROR!!!!!")
             console.log(error)
         })
         const appendData = (person) =>{
             let li = document.getElementById("jsonResponse")
             li.textContent = `${person.cards}`
             // jsonResponse.appendChild(li)
             } 
 
     })

   
// let jsonDatajs= jsonData
// console.log(jsonDatajs)
let situation = document.querySelector('.situation')
let playerCardOne = document.querySelector('.playerCardOne')
let playerCardTwo = document.querySelector('.playerCardTwo')
let dealerCardOne = document.querySelector('.dealerCardOne')
let dealerCardTwo = document.querySelector('.dealerCardTwo')
let communityCardOne = document.querySelector('.communityCardOne')
let communityCardTwo = document.querySelector('.communityCardTwo')
let communityCardThree = document.querySelector('.communityCardThree')
let communityCardFour = document.querySelector('.communityCardFour')
let communityCardFive = document.querySelector('.communityCardFive')

let good = true
console.log(good)

// console.log(li.innerText) 

let bankroll = document.querySelector('.bankroll')
let i = 0

//functions that controls card distribution
var parts = [['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'], ['C', 'S', 'D', 'H']],
    result = parts.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
var as = result.map(a => a.join('')); 
var s = as.sort(func);  
function func(a, b) {  
  return 0.5 - Math.random();
} 
console.log(s)

function michelle () {
    betFunctions[i++]();
    if (betFunctions[i==betFunctions.length]){
        return
    }
    console.log('vegetables');
};
let outcome = document.querySelector('outcome')
console.log(outcome)

function fold (){
    bankroll.innerText = Number.parseInt(bankroll.innerText)
    var s = as.sort(func)
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
    communityCardOne.innerText = 'communityCardOne',
    communityCardTwo.innerText = 'communityCardTwo',
    communityCardThree.innerText = 'communityCardThree',
    communityCardFour.innerText = 'communityCardFour',
    communityCardFive.innerText = 'communityCardFive'

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
    btnBet.addEventListener('click', michelle)
    let btnfold = document.getElementsByClassName('igiveup')[0];
    btnfold.addEventListener('click', fold)
   
};

let betFunctions = [
    () => {
            playerCardOne.innerText = s[1],
            playerCardTwo.innerText = s[2]
            var x = parseInt(document.getElementById("input").value);
            document.getElementById("ante").innerHTML = `Ante: $${x}`;
            bankroll.innerText = (Number.parseInt(bankroll.innerText))- (Number.parseInt(x))
            // console.log(Number.parseInt(x))
            document.getElementById('outcome').innerHTML = parseInt(x)
            
    },
    () => {
        communityCardOne.innerText = s[5],
        communityCardTwo.innerText = s[6],
        communityCardThree.innerText = s[7]
        var y = document.getElementById("input").value;
        document.getElementById("preflop").innerHTML = `Preflop $${parseInt(y)}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(y))
        // document.getElementById('outcome').innerHTML = parseInt(x)+ parseInt(y)
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+parseInt(y)
        console.log('twin dragons')
        
    },
    () => {
        communityCardFour.innerText = s[8]
        var z = document.getElementById("input").value;
        document.getElementById("flop").innerHTML = `Flop: $${z}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(z))
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+parseInt(z)
        console.log('triple dragons')
    },
    () => {
        communityCardFive.innerText = s[9]
        var a = document.getElementById("input").value;
        document.getElementById("turn").innerHTML = `Turn: $${a}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(a))
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+parseInt(a)
        console.log('quad dragons')
    },
    () => {
        dealerCardOne.innerText = s[3],
        dealerCardTwo.innerText = s[4]
        var b = document.getElementById("input").value;
        document.getElementById("river").innerHTML = `River: $${b}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(b))
        console.log('quint dragons')
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+parseInt(b)
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
        // bankroll.innerText = (Number.parseInt(bankroll.innerText))+(2 * (Number.parseInt(document.getElementById('outcome').innerHTML)))
        
        console.log(playerCardOne.innerText+','+playerCardTwo.innerText)
        console.log(jsonResponse.innerText)
        winCheck()
        function winCheck (){
        if ((playerCardOne.innerText+','+playerCardTwo.innerText) == (jsonResponse.innerText)){
            var s = as.sort(func)
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
            communityCardOne.innerText = 'communityCardOne',
            communityCardTwo.innerText = 'communityCardTwo',
            communityCardThree.innerText = 'communityCardThree',
            communityCardFour.innerText = 'communityCardFour',
            communityCardFive.innerText = 'communityCardFive'
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
            var s = as.sort(func)
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
            communityCardOne.innerText = 'communityCardOne',
            communityCardTwo.innerText = 'communityCardTwo',
            communityCardThree.innerText = 'communityCardThree',
            communityCardFour.innerText = 'communityCardFour',
            communityCardFive.innerText = 'communityCardFive'

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
}
    
    ];
    
})