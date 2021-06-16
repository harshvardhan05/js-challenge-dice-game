const rollDiceBtn = document.querySelector("#rollDice-btn")
const resetBtn = document.querySelector("#reset-btn")
const riskBtn = document.querySelector("#risk-btn")

const paraCondition = document.querySelector("#condition")
const paraRiskMessage = document.querySelector("#risk-message")

const message = document.querySelector("#message")
const player1Dice = document.querySelector("#player1Dice")
const player2Dice = document.querySelector("#player2Dice")

let player1Sum = 0;
let player2Sum = 0;
let count = 0;

resetBtn.addEventListener("click", function() {
   location.reload()
})

rollDiceBtn.addEventListener("click", function() {
        count++
        let score= rollDice()
        if(count%2 !=0){
            player1Sum += score
            player1Dice.textContent = score
            player1()
            if(player1Sum>=21){
                player1Wins()
            }
        }
        else{
            player2Sum += score
            player2Dice.textContent = score
            player2()
            if(player2Sum>=21){
                player2Wins()
            }
        }

    if(player1Sum >= 12 || player2Sum >= 12){
        riskBtn.style.display = "block"
        paraRiskMessage.style.display = "block"
    }
    if(player1Sum >=21 || player2Sum >=21){
        hideRiskBtnAndMessage()
    }
})

riskBtn.addEventListener("click", function() {
    count++
    let score = rollDice()
    let displayScore = score
    score==2 || score==4 || score==5  ? score = 0 : score *= 2
    if(count%2 != 0){
        player1Sum += score
        player1Dice.textContent = displayScore
        player1()
        if(player1Sum>=21){
            player1Wins()
        }

    }else{
        player2Sum += score
        player2Dice.textContent = displayScore
        player2()
        if(player2Sum>=21){
            player2Wins()
        }
    }
}) 

function rollDice(){
    let generatedNum = Math.ceil(Math.random()*6)
    return generatedNum
}

function player1(){
    document.querySelector("#player1-scoreboard").textContent = player1Sum
    message.textContent = "Player 2 Turn"
    displayActiveDice2Shadow()
}
function player1Wins(){
    message.textContent = "Player 1 Wins"
    diplayDiceBtnAndConditionPara()
    displayActiveDice1Shadow()
    hideRiskBtnAndMessage()
}

function player2(){
    document.querySelector("#player2-scoreboard").textContent = player2Sum
    message.textContent = "Player 1 Turn"
    displayActiveDice1Shadow()
}
function player2Wins(){
    message.textContent = "Player 2 Wins"
    diplayDiceBtnAndConditionPara()
    displayActiveDice2Shadow()
    hideRiskBtnAndMessage()
}

function hideRiskBtnAndMessage(){
    riskBtn.style.display = "none"
    paraRiskMessage.style.display = "none"
}
function diplayDiceBtnAndConditionPara(){
    rollDiceBtn.style.display="none"
    resetBtn.style.display="block"
    paraCondition.style.display="none"
}
function displayActiveDice1Shadow(){
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
function displayActiveDice2Shadow(){
    player1Dice.classList.remove("active")
    player2Dice.classList.add("active")
}

