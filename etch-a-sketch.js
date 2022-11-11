const sizeButtons = document.querySelectorAll('.size');
const colorButtons = document.querySelectorAll('.classic-colors, .groovy-colors');

let currentColors = 'classic-colors';

const createGrid = (size = 32 * 44, cssClass = 'medium-grid') => {
    const gameWrapper = document.getElementById('grid-wrapper');

    gameWrapper.innerHtml = '';

    gameWrapper.classList.remove("small-grid", "default-grid", "big-grid");
    gameWrapper.classList.add(cssClass);

    for (let i = 0; i < size; i += 1) {
        const row = document.createElement('div');
        gameWrapper.appendChild(row);
    }
}

const erase = () => {
    const gridItems = document.querySelectorAll('#grid-wrapper > div');

    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.style.backgroundColor = 'white';
        gridItem.style.borderColor = '#D8D8D8';
        gridItem.style.opacity = '1';
        gridItem.count = 0;
    });
}

function painting(mode) {
    const gridItems = document.querySelectorAll('#grid >div');

    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.count = 0;
        gridItem.addEventListener('mouseenter', (e) => {
        if (mode === 'classic-colors') { 
        e.target.style.backgroundColor = '#707070'; 
        e.target.count += 1; 
        e.target.style.opacity = 0.2 * e.target.count; // so it gets darker with each stroke //
        } else if (mode === 'groovy-colors') {
            const groovyPalette = ['#EF476F', '#FFD166', '#06D6A0', '#118AB2', '#073B4C'];
            const rainbowMode = Math.floor(Math.random() * groovyPalette.length);
            e.target.style.opacity = 1;
            e.style.backgroundColor = groovyPalette[rainbowMode];
        }
    });
   });
  }  

  function selectButton(button) {
    if (button.classList.contains('mode')) {
      colorButtons.forEach((selection) => {
        selection.classList.remove('active-button');
      });
    } else {
      sizeButtons.forEach((selection) => {
        selection.classList.remove('active-button');
      });
    }
    button.classList.add('active-button');
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
          createGrid(small, 'small-grid');
          painting(currentColors);
          selectButton(selection);
        } else if (selection.classList.contains('medium')) {
          erase();
          createGrid(medium, 'default-grid');
          painting(currentColors);
          selectButton(selection);
        } else {
          erase();
          createGrid(big, 'big-grid');
          painting(currentColors);
          selectButton(selection);
        }
      });
    });
  }
  
  function changeMode() {
    colorButtons[0].classList.add('active-button');
  
    colorButtons.forEach((selection) => {
      selection.addEventListener('click', () => {
        if (selection.classList.contains('classic')) {
          painting('classic');
          selectButton(selection);
          currentColors = 'classic';
        } else {
          painting('groovy-colors');
          selectButton(selection);
          currentColors = 'groovy-colors';
        }
      });
    });
  }
  
  function eraseListener() {
    const eraseButton = document.querySelector('.erase');
  
    eraseButton.addEventListener('click', erase);
  }
  
  function startGame() {
    createGrid();
    painting('classic');
    changeSize();
    changeMode();
    eraseListener();
  }
  
  startGame();