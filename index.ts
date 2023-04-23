// Variables 

const boxEl = document.querySelectorAll('.box');
const elementArray  = [...boxEl];
const colorCode  = document.querySelector('.colorCode') as HTMLElement;
const colorArray:string[] = [];
const newColor = document.querySelector('.newColor') as HTMLElement;
const btnEasy = document.querySelector('.btn__easy') as HTMLElement;
const btnHard = document.querySelector('btn__hard') as HTMLElement;
let count = 0;
const gameStatus = document.querySelector('.gamestatus') as HTMLElement;

console.log(gameStatus)

btnEasy.addEventListener('click' , ()=>{
    alert('salam')
})




// generate random color;

function generateRandomColor(maxNumber:number ):string{

    const r = Math.floor(Math.random() * maxNumber);
    const g = Math.floor(Math.random() * maxNumber);
    const b = Math.floor(Math.random() * maxNumber);
    return `rgb(${r},${g},${b})`

}


for (let i:number = 0;i<9;i++){
    colorArray.push(generateRandomColor(255))
}


console.log(generateRandomColor(255));

elementArray.forEach((eachBox ,index) =>{
    (eachBox as HTMLElement).style.background = colorArray[index]
    eachBox.addEventListener('click' , ():void=>{
        if(index === randomColor){
            // alert('welcome')
            (eachBox as HTMLElement).style.opacity = '0.2';
            gameStatus.textContent = 'Correct'
            gameStatus.classList.add('success');
            gameStatus.classList.remove('fail')
        
        }else{
            gameStatus.textContent = 'Try again';
            gameStatus.classList.remove('success');
            gameStatus.classList.add('fail')
        }
    })
})

const randomColor  =  Math.trunc(Math.random() *colorArray.length)

colorCode.textContent =  `${colorArray[randomColor]
}`;




console.log(colorArray)


function createElement(newElement:any){
    const domElement = document.createElement(newElement);
    domElement.classNames.add('box')
}