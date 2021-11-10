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
//function that keeps our JSON output hidden
function reset () {
    let JSON = document.getElementById("jsonResponse"),
        displayValue = "";
        if (JSON.style.display == "")
        displayValue = "none";
        JSON.style.display = displayValue;
        }

//function that controls card distribution
let parts = [['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'], ['C', 'S', 'D', 'H']],
        result = parts.reduce((a, b) => a.reduce((r, v) => r.concat(b.map(w => [].concat(v, w))), []));
let as = result.map(a => a.join('')) 
let s = as.sort(func)
    function func(a, b) {  
        return 0.5 - Math.random()
    }

    console.log((s[1]+','+s[2]))
//function that adds to the value of i on each click 
function clickFunctions () {
    betFunctions[i++]();
    console.log(i)
    if (betFunctions[i==betFunctions.length]){
        return
    }
}   
//function for folding a hand (resets all elements to "original" position)
function fold (){
    bankroll.innerText = Number.parseInt(bankroll.innerText)
    let s = as.sort(func)  
    function func(a, b) {  
    return 0.5 - Math.random();
    }
    function buttonReset (){
        i=0
    }
    buttonReset()
    cardOne.src = ""
    cardTwo.src = ""
    cardThree.src =""
    cardFour.src = ""
    cardFive.src = ""
    cardSix.src = ""
    cardSeven.src = ""
    cardEight.src = ""
    cardNine.src = ""
    jsonResponse.innerText
    document.getElementById('outcome').innerHTML = '0'
    document.getElementById("ante").innerHTML = 'Ante:'
    document.getElementById("preflop").innerHTML = 'Preflop:'
    document.getElementById("flop").innerHTML = 'Flop:'
    document.getElementById("turn").innerHTML = 'Turn:'
    document.getElementById("river").innerHTML = 'River:'
    situation.innerText='Chickened out? Try another bet!'
}
//function that establishes the bet and fold buttons at click [0] upon load
window.onload = function backgroundInit(){
    let btnBet = document.getElementsByClassName('bet')[0];
    btnBet.addEventListener('click', clickFunctions)
    let btnfold = document.getElementsByClassName('igiveup')[0];
    btnfold.addEventListener('click', fold)
   
};
reset ()
//array of functions that correlate to the click [0,1,2,3,etc]
let betFunctions = [
    () => {
            cardOne.src =`cards/${s[1]}.svg`
            cardTwo.src =`cards/${s[2]}.svg`
            cardThree.src=('cards/BLUE_BACK.svg')
            cardFour.src=('cards/BLUE_BACK.svg')
            let x = parseInt(document.getElementById("input").value);
            document.getElementById("ante").innerHTML = `Ante: $${x}`;
            bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(x)) 
            document.getElementById('outcome').innerHTML = parseInt(x)
            situation.innerText='Place Your Bets'
    },
    () => {
        cardFive.src =`cards/${s[5]}.svg`
        cardSix.src =`cards/${s[6]}.svg`
        cardSeven.src =`cards/${s[7]}.svg`
        let y = document.getElementById("input").value;
        document.getElementById("preflop").innerHTML = `Preflop $${parseInt(y)}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(y))
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+(Number.parseInt(y))       
    },
    () => {
        cardEight.src =`cards/${s[8]}.svg`
        let z = document.getElementById("input").value;
        document.getElementById("flop").innerHTML = `Flop: $${z}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(z))
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+(Number.parseInt(z))       
    },
    () => {
        cardNine.src =`cards/${s[9]}.svg`
        let a = document.getElementById("input").value;
        document.getElementById("turn").innerHTML = `Turn: $${a}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(a))
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+(Number.parseInt(a))
    },
    () => {
        cardThree.src=(`cards/${s[3]}.svg`)
        cardFour.src=(`cards/${s[4]}.svg`)
        let b = document.getElementById("input").value;
        document.getElementById("river").innerHTML = `River: $${b}`;
        bankroll.innerText = (Number.parseInt(bankroll.innerText))-(Number.parseInt(b))
        document.getElementById('outcome').innerHTML = (Number.parseInt(document.getElementById('outcome').innerHTML))+(Number.parseInt(b))
        btnBet.innerText='Click to Play Again'
        reset ()
        //function to check loss
        function checkLoss (){
            if(bankroll.innerText <= '0'){
                situation.innerText='Out of Money? Time to Hit the ATM!'
            }
        }
        checkLoss()
        if ((s[1]+','+s[2]) == (jsonResponse.innerText)){
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
        if ((s[1]+','+s[2]) == (jsonResponse.innerText)){
            let s = as.sort(func)
            console.log(s);  
            function func(a, b) {  
            return 0.5 - Math.random();
            }
            function buttonReset (){
                i=0
            }
            buttonReset()
            bankroll.innerText = (Number.parseInt(bankroll.innerText))+(2 * (Number.parseInt(document.getElementById('outcome').innerHTML)))
            cardOne.src = ""
            cardTwo.src = ""
            cardThree.src =""
            cardFour.src = ""
            cardFive.src = ""
            cardSix.src = ""
            cardSeven.src = ""
            cardEight.src = ""
            cardNine.src = ""
            jsonResponse.innerText =('hello')
            document.getElementById('outcome').innerHTML = '0'
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

            jsonResponse.innerText

            document.getElementById('outcome').innerHTML = '0'
            cardOne.src = ""
            cardTwo.src = ""
            cardThree.src =""
            cardFour.src = ""
            cardFive.src = ""
            cardSix.src = ""
            cardSeven.src = ""
            cardEight.src = ""
            cardNine.src = ""
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