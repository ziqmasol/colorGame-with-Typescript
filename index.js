"use strict";
// Variables 
const boxEl = document.querySelectorAll('.box');
const elementArray = [...boxEl];
const colorCode = document.querySelector('.colorCode');
const colorArray = [];
const newColor = document.querySelector('.newColor');
const btnEasy = document.querySelector('.btn__easy');
const btnHard = document.querySelector('btn__hard');
let count = 0;
const gameStatus = document.querySelector('.gamestatus');
console.log(gameStatus);
btnEasy.addEventListener('click', () => {
    alert('salam');
});
// generate random color;
function generateRandomColor(maxNumber) {
    const r = Math.floor(Math.random() * maxNumber);
    const g = Math.floor(Math.random() * maxNumber);
    const b = Math.floor(Math.random() * maxNumber);
    return `rgb(${r},${g},${b})`;
}
for (let i = 0; i < 9; i++) {
    colorArray.push(generateRandomColor(255));
}
console.log(generateRandomColor(255));
elementArray.forEach((eachBox, index) => {
    eachBox.style.background = colorArray[index];
    eachBox.addEventListener('click', () => {
        if (index === randomColor) {
            // alert('welcome')
            eachBox.style.opacity = '0.2';
            gameStatus.textContent = 'Correct';
            gameStatus.classList.add('success');
            gameStatus.classList.remove('fail');
        }
        else {
            gameStatus.textContent = 'Try again';
            gameStatus.classList.remove('success');
            gameStatus.classList.add('fail');
        }
    });
});
const randomColor = Math.trunc(Math.random() * colorArray.length);
colorCode.textContent = `${colorArray[randomColor]}`;
console.log(colorArray);
function createElement(newElement) {
    const domElement = document.createElement(newElement);
    domElement.classNames.add('box');
}
