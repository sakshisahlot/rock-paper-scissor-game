let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("button");
let userScoreParagraph = document.querySelector("#user-score");
let computerScoreParagraph = document.querySelector("#computer-score");

const randomCompChoice = (options) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

const genComputerChoice = () =>{
    let options = ["rock", "paper", "scissor"];
    let computerChoice = randomCompChoice(options);
    return computerChoice;
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        message.innerText = `You Wins ! Yous choice ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
        userScore++;
        userScoreParagraph.innerText = userScore;
        console.log("you wins");
    } else {
        message.innerText = `You Lose ! Computer choice ${computerChoice} beats ${userChoice}`;
        message.style.backgroundColor = "red";
        computerScore++;
        computerScoreParagraph.innerText = computerScore;
        console.log("computer wins");
    }
}


const playGame = (userChoice) =>
{
    console.log("user choice = ", userChoice);
    let computerChoice = genComputerChoice();
    console.log("computer choice = ", computerChoice);
    if(userChoice === computerChoice){
        message.innerText = "Game was draw";
        message.style.backgroundColor = "cadetblue";
        console.log("Game was draw");
    } else{
    let userWins = true;
    if(userChoice === "rock"){
        userWins = computerChoice === "paper"? false : true;
    } else if( userChoice === "scissor"){
        userWins = computerChoice === "rock"? false : true;
    } else {
        userWins = computerChoice === "rock"? true : false;
    }
    showWinner(userWins,userChoice,computerChoice);
}
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    })
    
});