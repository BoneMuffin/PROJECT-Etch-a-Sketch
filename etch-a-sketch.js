const sizeButton = document.querySelector('.size');
const modeButtons = document.querySelectorAll('.mode');
const eraseButton = document.querySelector('#erase-button'); 

const container = document.querySelector('#canvas-container');
const redFrame = document.querySelector('.red-frame');

let defaultGrid = 16;

// 16x16 default grid inside grid wrapper (960px wide), fully functioning for mouse events
const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
  
    for (let i = 0; i < amtOfGrids; i++) {
      const row = document.createElement('div')
      row.classList.add('grid-row')
  
      for (let j = 0; j < amtOfGrids; j++) {
        const widthAndHeight = 1080 / amtOfGrids
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        gridBox.style.width = `${widthAndHeight}px`
        gridBox.style.height = `${widthAndHeight}px`
        // adding mouseenter listener to change background color
      const paintBoxes = gridBox.addEventListener('mouseenter', () => {
          const classicMode = Number(gridBox.style.opacity)
          gridBox.style.background = `rgb(0, 0, 0)`
          gridBox.style.opacity = classicMode + .1
        })
        row.appendChild(gridBox)
      }
      wrapper.appendChild(row)
    } 
    container.appendChild(wrapper)
  }

sizeButton.addEventListener('click', () => {
    let userSize = Number(prompt('What dimensions do you want for the new grid?'))
  
    while (userSize > 100) {
      userSize = Number(prompt('Pick a smaller number and make sure its 100 or less!'))
    }
  
    const wrapper = document.querySelector('#canvas-container')
  
    if (!wrapper) {
      createGrid(userSize)
    } else {
      wrapper.remove()
      createGrid(userSize)
    }
  
  });

// groovy(rgb) and classic mode(+10% opacity with each mouseover), functioning buttons


// add class for the shaking animation //
eraseButton.addEventListener('click',shakeCanvas);

function shakeCanvas() {
  const boxes = document.querySelectorAll('.grid-box');
  boxes.forEach(box => box.style.backgroundColor = "");
  redFrame.classList.add('canvas-shake');
  //when the animation is finished, remove the class so it's ready to run again
  redFrame.addEventListener('animationend',() => redFrame.classList.remove('canvas-shake'));
};