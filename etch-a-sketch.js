const sizeButtons = document.querySelectorAll('.size');
const modeButtons = document.querySelectorAll('.mode');
const eraseButton = document.querySelector('#erase-button'); 

const canvasContainer = document.querySelector('#canvas-container');
const redFrame = document.querySelector('.red-frame');


// 16x16 default grid inside grid wrapper (960px wide), fully functioning for mouse events
const createGrid = (amtOfGrids) => {
    const gameWrapper = document.createElement('div')
    gameWrapper.classList.add('gameWrapper')

    for ()
}
// groovy(rgb) and classic mode(+10% opacity with each mouseover), functioning buttons
const paintDivs =
// fully functioning size buttons

// add class for the shaking animation //
function shakeCanvas() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => square.style.backgroundColor = "");
    appContainer.classList.add('canvas-shake');
    //when the animation is finished, remove the class so it's ready to run again
    appContainer.addEventListener('animationend',() => appContainer.classList.remove('canvas-shake'));
  };
  