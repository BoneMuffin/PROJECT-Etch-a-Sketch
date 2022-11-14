const sizeButtons = document.querySelector('.size');
const modeButtons = document.querySelectorAll('mode');
const eraseButton = document.querySelector('#erase-button'); 
const container = document.querySelector('.container');


function erase() {
  const gridItems = document.querySelectorAll('#grid-container > div');

  gridItems.forEach((item) => {
    const gridItem = item;
    gridItem.style.backgroundColor = '#D8D8D8';
    gridItem.style.opacity = '1';
    gridItem.count = 0;
  });
}

