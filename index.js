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
        if(count%2 !=0){
            let score= rollDice()
            player1Sum += score
            player1Dice.textContent = score
            document.querySelector("#player1-scoreboard").textContent = player1Sum
            message.textContent = "Player 2 Turn"
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            if(player1Sum>=21){
                message.textContent = "Player 1 Wins"
                rollDiceBtn.style.display="none"
                resetBtn.style.display="block"
                paraCondition.style.display="none"
                player2Dice.classList.remove("active")
                player1Dice.classList.add("active")
            }
        }
        else{
            let score= rollDice()
            player2Sum += score
            document.querySelector("#player2Dice").textContent = score
            document.querySelector("#player2-scoreboard").textContent = player2Sum
            message.textContent = "Player 1 Turn"
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            if(player2Sum>=21){
                message.textContent = "Player 2 Wins"
                rollDiceBtn.style.display="none"
                resetBtn.style.display="block"
                paraCondition.style.display="none"
                player1Dice.classList.remove("active")
                player2Dice.classList.add("active")
            }
        }

    if(player1Sum >= 12 || player2Sum >= 12){
        riskBtn.style.display = "block"
        paraRiskMessage.style.display = "block"
    }
})

riskBtn.addEventListener("click", function() {
    count++
        console.log(count)
    let points = rollDice()
    let displayPoints = points
        console.log(points)
    points==2 || points==4 || points==5  ? points = 0 : points *= 2
        console.log(points)
    if(count%2 != 0){
        player1Sum += points
            console.log(player1Sum)
        player1Dice.textContent = displayPoints
        document.querySelector("#player1-scoreboard").textContent = player1Sum
        message.textContent = "Player 2 Turn"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        if(player1Sum>=21){
            message.textContent = "Player 1 Wins"
            rollDiceBtn.style.display="none"
            resetBtn.style.display="block"
            paraCondition.style.display="none"
            player2Dice.classList.remove("active")
            player1Dice.classList.add("active")
            riskBtn.style.display = "none"
            paraRiskMessage.style.display = "none"
        }

    }else{
        player2Sum += points
            console.log(player2Sum)
        player2Dice.textContent = displayPoints
        document.querySelector("#player2-scoreboard").textContent = player2Sum
        message.textContent = "Player 1 Turn" 
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        if(player2Sum>=21){
            message.textContent = "Player 2 Wins"
            rollDiceBtn.style.display="none"
            resetBtn.style.display="block"
            paraCondition.style.display="none"
            player1Dice.classList.remove("active")
            player2Dice.classList.add("active")
            riskBtn.style.display = "none"
            paraRiskMessage.style.display = "none"
        }
    }
}) 

function rollDice(){
    let generatedNum = Math.ceil(Math.random()*6)
    return generatedNum
}

