let userPoint = 0;
let compPoint = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#res");
const result = document.querySelector(".result");

const restart = document.querySelector("#reset");


const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["stone", "paper", "Scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game was Drawn!";
    result.style.backgroundColor = "#fff"
}
const showWinner = (userWin,compChoice) => {
    if(userWin){
        userPoint++;
        userScore.innerText = userPoint;
        msg.innerText = "You won! Computer chooses " + compChoice;
        result.style.backgroundColor = "green";
    }else{
        compPoint++;
        compScore.innerText = compPoint;
        msg.innerText = "You lose! Computer chooses " + compChoice;
        result.style.backgroundColor = "red";

    }
}

const newGame = () => {
    userPoint =0;
    compPoint = 0;
    userScore.innerText = userPoint;
    compScore.innerText = compPoint;
    result.style.backgroundColor = "#222";
}
const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

function clearScreen(){
    userPoint = 0;
    compPoint = 0;
    userScore.innerText = userPoint;
    compScore.innerText = compPoint;
    msg.innerText = "Play Game";
    result.style.backgroundColor = "#fff";
    restart.style.backgroundColor ="#0A0A0A"
}
restart.addEventListener("click", clearScreen);
