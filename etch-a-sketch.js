const sizeButtons = document.querySelector('.size');
const modeButtons = document.querySelector('.mode');
const eraseButton = document.querySelector('#erase-button'); 

const container = document.querySelector('#canvas-container');
const redFrame = document.querySelector('.red-frame');

let currentMode = 'classic'

function createGrid(size = 32 * 44, cssClass = 'default-grid') {
  const gameContainer = document.getElementById('canvas-container');

  gameContainer.innerHTML = '';

  gameContainer.classList.remove('small-grid', 'default-grid', 'big-grid');
  gameContainer.classList.add(cssClass);

  for (let i = 0; i < size; i += 1) {
    const div = document.createElement('grid-box');
    gameContainer.appendChild(div);
  }
}

function paintBoxes(mode) {
  const gridItems = document.querySelectorAll('#canvas-container > grid-box');

  gridItems.forEach((item) => {
    const gridItem = item;
    gridItem.count = 0;
    gridItem.addEventListener('mouseenter', (e) => {
      if (mode === 'classic') {
        e.target.style.backgroundColor = '#707070';
        e.target.count += 1;
        e.target.style.opacity = 0.2 * e.target.count;
      }  else if (mode === 'groovy') {
        const groovyPalette = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];
        const randomColor = Math.floor(Math.random() * groovyPalette.length);
        e.target.style.opacity = 1;
        e.target.style.backgroundColor = groovyPalette[randomColor];
      }
    });
  });
}

function selectButton(button) {
  if (button.classList.contains('mode')) {
    modeButtons.forEach((selection) => {
      selection.classList.remove('active-button');
    });
  } else {
    sizeButtons.forEach((selection) => {
      selection.classList.remove('active-button');
    });
  }
  button.classList.add('active-button');
}

function erase() {
  const gridItems = document.querySelectorAll('#canvas-container > grid-box');

  gridItems.forEach((item) => {
    const gridItem = item;
    gridItem.style.backgroundColor = '#D8D8D8';
    gridItem.style.opacity = '1';
    gridItem.count = 0;
  });
}

function changeSize() {
  const small = 16 * 22;
  const medium = 32 * 44;
  const big = 64 * 88;

  sizeButtons[1].classList.add('active-button');

  sizeButtons.forEach((selection) => {
    selection.addEventListener('click', () => {
      if (selection.classList.contains('small')) {
        erase();
        generateGrid(small, 'small-grid');
        startPainting(currentMode);
        selectButton(selection);
      } else if (selection.classList.contains('medium')) {
        erase();
        generateGrid(medium, 'default-grid');
        startPainting(currentMode);
        selectButton(selection);
      } else {
        erase();
        generateGrid(big, 'big-grid');
        startPainting(currentMode);
        selectButton(selection);
      }
    });
  });
}

function switchMode() {
  modeButtons[0].classList.add('active-button');

  modeButtons.forEach((selection) => {
    selection.addEventListener('click', () => {
      if (selection.classList.contains('classic')) {
        startPainting('classic');
        selectButton(selection);
        currentMode = 'classic';
      } else {
        startPainting('groovy');
        selectButton(selection);
        currentMode = 'groovy';
      }
    });
  });
}



function eraseListener() {
  const eraseButton = document.querySelector('#erase-button');

  eraseButton.addEventListener('click', erase);
}

// add class for the shaking animation //
eraseButton.addEventListener('click', shakeCanvas);

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