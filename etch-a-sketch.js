const sizeButton = document.querySelector('.size');
const modeButton = document.querySelector('.mode');
const eraseButton = document.querySelector('#erase-button'); 

const container = document.querySelector('#canvas-container');
const redFrame = document.querySelector('.red-frame');

let currentMode = 'classic'

// 16x16 default grid inside grid wrapper (960px wide), fully functioning for mouse events
const createGrid 





// paint each cell 
function paintBoxes(mode) {
  const gridItems = document.querySelectorAll('#canvas-container > grid-box');

  gridItems.forEach((item) => {
    const gridItem = item;
    gridItem.count = 0;
    gridItem.addEventListener('mouseenter', (e) => {

      // classic palette (+10% opacity with each mouseover event)
      if (mode === 'classic') {
        const currentOpacity = Number(gridBox.style.opacity)
        gridBox.style.background = `rgb(0, 0, 0)`
        gridBox.style.opacity = currentOpacity + .1

        // groovy colors with RGB
      } else if (mode === 'psychedelic') {
        const groovyPalette = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];
        const randomColor = Math.floor(Math.random() * groovyPalette.length);
        e.target.style.opacity = 1;
        e.target.style.backgroundColor = psychedelicPallete[randomColor];
      }

    });
  });
}

// switch between palettes
function switchMode() {
  modeButton.classList.add('active-button');

  modeButton.forEach((selection) => {
    selection.addEventListener('click', () => {
      if (selection.classList.contains('classic')) {
        paintBoxes('classic');
        selectButton(selection);
        currentMode = 'classic';
      } else {
        paintBoxes('groovy');
        selectButton(selection);
        currentMode = 'groovy';
      }
    });
  });
}

// functioning mode buttons 
function selectButton(button) {
  if (button.classList.contains('mode')) {
    modeButton.forEach((selection) => {
      selection.classList.remove('active-button');
    });
  } else {
    sizeButton.forEach((selection) => {
      selection.classList.remove('active-button');
    });
  }
  button.classList.add('active-button');
}

// erase button
//Clear the canvas and then add CSS grid properties to the canvas element


// add class for the shaking animation //
eraseButton.addEventListener('click',shakeCanvas);

function shakeCanvas() {
  const boxes = document.querySelectorAll('.grid-box');
  boxes.forEach(box => box.style.backgroundColor = "");
  redFrame.classList.add('canvas-shake');
  //when the animation is finished, remove the class so it's ready to run again
  redFrame.addEventListener('animationend',() => redFrame.classList.remove('canvas-shake'));
};

function startGame() {
  createGrid();
  paintBoxes('classic');
//  changeSize();
  switchMode();
  eraseButton();
}

startGame();