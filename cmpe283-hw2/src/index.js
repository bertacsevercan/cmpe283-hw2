const correctWord = "javascript";
const correctLetterList = [];
const usedLetterList = [];
const correctWordText = document.querySelector("#correctWord");
const input = document.querySelector("input");
const button = document.querySelector("button");
const usedLetters = document.querySelector("#usedLetters");

for(let i = 0; i < correctWord.length; i++){
    correctWordText.innerText += " _ "
    correctLetterList.push("_");
}

const hangman = (letter) => {
    correctWord.split("").forEach((x, index) => {
        if (x === letter) {
            correctLetterList[index] = letter;
        }
    });

    if (!correctWord.includes(letter)) {
        usedLetterList.push(letter);
    };
}

let isFinished = false;

const endGame = () => {
    const maxLives = 5;
    if(usedLetterList.length === maxLives) {
        alert("You Lose!");
        isFinished = true;
    }
    if(correctLetterList.join("") == correctWord){
        alert("You Win!");
        isFinished = true;
    }
}

const resetGame = () => {
    if(isFinished){
        button.disabled = true;
        correctWordText.innerText = correctWord;
    }
}


input.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
            button.click();
        }
});

button.addEventListener("click", () => {
    hangman(input.value)
    correctWordText.innerText = correctLetterList.join(" ");
    usedLetters.innerText = usedLetterList;
    endGame();
    resetGame();
});