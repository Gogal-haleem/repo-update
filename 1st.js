let userScore = 0;
let compScore = 0;


const msg = document.querySelector("#msg"); 
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const computer = genCompChoice();
    console.log("comp choice = ", computer);

    let userWin = true;
    if (userChoice === computer) {
        msg.innerText = "Game was a draw! Play again.";
        msg.style.backgroundColor = "#081b31";
        return; // Stop function early on draw
    } else if (userChoice === "rock") {
        userWin = computer === "paper" ? false : true;
    } else if (userChoice === "paper") {
        userWin = computer === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
        userWin = computer === "rock" ? false : true;
    }
    
    console.log("userwin value", userWin);

    if (userWin === true) {
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = "You loose!";
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})