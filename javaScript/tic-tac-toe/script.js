let resetButton = document.querySelector(".reset-game-button");
let newGameButton = document.querySelector(".new-game-button");
let gameplay = document.querySelector(".gameplay");
let result = document.querySelector(".result");
let resultMessage = document.querySelector(".result-message");
let box = document.querySelectorAll(".box");

let winningPosition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

let currentPlayer = "X";
let count = 0;

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            box.disabled = true;
            count++;

            let isWinner = checkWinner();

            if (count === 9 && !isWinner) {
                gameDraw();
            }
        }
    });
});

const gameDraw = () => {
    resultMessage.innerText = "It's a Draw, Would you like to Play again?";
    result.classList.remove("hide");
    disableBoxes();
    gameplay.classList.add("hide");
};

const disableBoxes = () => {
    box.forEach((box) => (box.disabled = true));
};

const enableBoxes = () => {
    box.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const showWinner = (winner) => {
    resultMessage.innerText = `Congratulations, Winner is ${winner} \n Would you like to play agin? :) `;
    result.classList.remove("hide");
    gameplay.classList.add("hide");
};

const checkWinner = () => {
    for (let Position of winningPosition) {
        let pos1Val = box[Position[0]].innerText;
        let pos2Val = box[Position[1]].innerText;
        let pos3Val = box[Position[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return true;
        }
    }
    return false;
};

const resetGame = () => {
    currentPlayer = "X";
    count = 0;
    enableBoxes();
    result.classList.add("hide");
    gameplay.classList.remove("hide");
};

resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);
