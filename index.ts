// Variables 

const boxEl = document.querySelectorAll('.box');
const elementArray  = [...boxEl];
const colorCode  = document.querySelector('.colorCode') as HTMLElement;
const newColor = document.querySelector('.newColor') as HTMLElement;
const btnEasy = document.querySelector('.btn__easy') as HTMLElement;
const btnHard = document.querySelector('btn__hard') as HTMLElement;
const gameStatus = document.querySelector('.gamestatus') as HTMLElement;
const colorBox = document.querySelector('.colorBox') as HTMLElement
let colorArray:string[] = [];
let count = 0;
let tryNewColor = 0


// functions

generatecolorArray()
isBox()
const randomColor  =  Math.trunc(Math.random() *colorArray.length);
colorCode.textContent = colorArray[randomColor]

newColor.addEventListener('click' , newGame)
createBoxEl()




// generate random color;

function generateRandomColor(maxNumber:number ):string{

    const r = Math.floor(Math.random() * maxNumber);
    const g = Math.floor(Math.random() * maxNumber);
    const b = Math.floor(Math.random() * maxNumber);
    return `rgb(${r},${g},${b})`

}

function generatecolorArray(){
    for (let i:number = 0;i<9;i++){
        colorArray.push(generateRandomColor(255))
    }

}


function newGame(){
    count = 0
    colorArray = [];
    generateRandomColor(255)
    generatecolorArray();
    isBox()
    gameStatus.textContent  = 'welcome'
    
}







function isBox(){

    elementArray.forEach((eachBox ,index) =>{
    (eachBox as HTMLElement).style.background = colorArray[index]
    eachBox.addEventListener('click' , ():void=>{
        // tryNewColor++
        // if(tryNewColor > 1){
        //     alert('try another color')
        // }
        
        // check number guess
        if (count <=3){

            console.log(index)

            // check for success to restart game
            if(!gameStatus.classList.contains('success')){
                

                // check if click box === display color code
                if(index === randomColor ){
            (eachBox as HTMLElement).style.opacity = '0.2';

            alert('Correct');
            elementArray.forEach((eachbox ,index)=>{
                (eachbox as HTMLElement).style.background = colorArray[randomColor]
            })
            gameStatus.textContent = 'Correct'
            gameStatus.classList.add('success');
            gameStatus.classList.remove('fail');
            count++;
        } 
        
        else{
            gameStatus.textContent = 'Try again';
            gameStatus.classList.remove('success');
            gameStatus.classList.add('fail')
        
        }
            
        }
        
        
        else{
            alert('restart Game')
        }
            count++

        }
        
        
        else{
            gameStatus.textContent = 'START A NEW GAME';
            gameStatus.classList.remove('fail');
            gameStatus.classList.remove('success');
            gameStatus.classList.add('startNewGame')
            alert('SELECT NEW COLORS')
        }
        
    })
})


}


function createBoxEl(){
    const newElement = document.createElement('div');
    newElement.classList.add('box');
    // newElement.textContent = 'salam'
    colorBox.appendChild(newElement);
    console.log(colorCode.childNodes)

    return newElement

    

}



