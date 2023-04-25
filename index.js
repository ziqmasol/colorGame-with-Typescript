"use strict";
// Variables 
const boxEl = document.querySelectorAll('.box');
const elementArray = [...boxEl];
const colorCode = document.querySelector('.colorCode');
const newColor = document.querySelector('.newColor');
const btnEasy = document.querySelector('.btn__easy');
const btnHard = document.querySelector('btn__hard');
const gameStatus = document.querySelector('.gamestatus');
const colorBox = document.querySelector('.colorBox');
let colorArray = [];
let count = 0;
let tryNewColor = 0;
// functions
generatecolorArray();
isBox();
const randomColor = Math.trunc(Math.random() * colorArray.length);
colorCode.textContent = colorArray[randomColor];
newColor.addEventListener('click', newGame);
createBoxEl();
// generate random color;
function generateRandomColor(maxNumber) {
    const r = Math.floor(Math.random() * maxNumber);
    const g = Math.floor(Math.random() * maxNumber);
    const b = Math.floor(Math.random() * maxNumber);
    return `rgb(${r},${g},${b})`;
}
function generatecolorArray() {
    for (let i = 0; i < 9; i++) {
        colorArray.push(generateRandomColor(255));
    }
}
function newGame() {
    count = 0;
    colorArray = [];
    generateRandomColor(255);
    generatecolorArray();
    isBox();
    gameStatus.textContent = 'welcome';
}
function isBox() {
    elementArray.forEach((eachBox, index) => {
        eachBox.style.background = colorArray[index];
        eachBox.addEventListener('click', () => {
            // tryNewColor++
            // if(tryNewColor > 1){
            //     alert('try another color')
            // }
            // check number guess
            if (count <= 3) {
                console.log(index);
                // check for success to restart game
                if (!gameStatus.classList.contains('success')) {
                    // check if click box === display color code
                    if (index === randomColor) {
                        eachBox.style.opacity = '0.2';
                        alert('Correct');
                        elementArray.forEach((eachbox, index) => {
                            eachbox.style.background = colorArray[randomColor];
                        });
                        gameStatus.textContent = 'Correct';
                        gameStatus.classList.add('success');
                        gameStatus.classList.remove('fail');
                        count++;
                    }
                    else {
                        gameStatus.textContent = 'Try again';
                        gameStatus.classList.remove('success');
                        gameStatus.classList.add('fail');
                    }
                }
                else {
                    alert('restart Game');
                }
                count++;
            }
            else {
                gameStatus.textContent = 'START A NEW GAME';
                gameStatus.classList.remove('fail');
                gameStatus.classList.remove('success');
                gameStatus.classList.add('startNewGame');
                alert('SELECT NEW COLORS');
            }
        });
    });
}
function createBoxEl() {
    const newElement = document.createElement('div');
    newElement.classList.add('box');
    // newElement.textContent = 'salam'
    colorBox.appendChild(newElement);
    console.log(colorCode.childNodes);
    return newElement;
}
