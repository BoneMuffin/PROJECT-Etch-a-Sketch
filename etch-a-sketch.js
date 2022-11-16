const sizeButtons = document.querySelectorAll('.size');
const modeButtons = document.querySelectorAll('.mode');
const eraseButton = document.querySelector('#erase-button'); 

const canvasContainer = document.querySelector('#canvas-container');
const redFrame = document.querySelector('.red-frame');


// 16x16 default grid inside grid wrapper (960px wide), fully functioning for mouse events
const createGrid = (amtOfGrids) => {
    const canvasWrapper = document.createElement('div')
    canvasWrapper.classList.add('canvas-container')

    for (let i = 0; i < amtOfGrids; i++) {    // layout of the grid cells
        const row = document.createElement('div') 
        row.classLisst.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++) {
            const widthAndHeight = 1080 / amtOfGrids
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')    // so the boxes have grey borders :p
            gridBox.style.width = `${widthAndHeight}px` // result of division into px
            gridBox.style.height = `${widthAndHeight}px`
        }
    }
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
  