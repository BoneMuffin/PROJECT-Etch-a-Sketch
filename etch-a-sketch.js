const sizeButton = document.querySelectorAll('.size-selection');
const modeButtons = document.querySelectorAll('.mode');
const eraseButton = document.querySelector('#erase-button'); 

const container = document.querySelector('#canvas-container');
const redFrame = document.querySelector('.red-frame');


// 16x16 default grid inside grid wrapper (960px wide), fully functioning for mouse events
const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
  
    for (let i = 0; i < amtOfGrids; i++) {
      const row = document.createElement('div')
      row.classList.add('grid-row')
  
      for (let j = 0; j < amtOfGrids; j++) {
        const widthAndHeight = 960 / amtOfGrids
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        gridBox.style.width = `${widthAndHeight}px`
        gridBox.style.height = `${widthAndHeight}px`
        // adding mouseenter listener to change background color
        gridBox.addEventListener('mouseenter', () => {
          const classicMode = Number(gridBox.style.opacity)
          gridBox.style.background = `rgb(0, 0, 0)`
          gridBox.style.opacity = classicMode + .1
        })
        row.appendChild(gridBox)
      }

      container.appendChild(row)
    } 
     container.appendChild(wrapper)
  }
  

sizeButton.addEventListener('click', () => {
    let userSize = Number(prompt('what dimensions do you want for the new grid'))
  
    while (userSize > 100) {
      userSize = Number(prompt('Pick a smaller number and make sure its 100 or less'))
    }
  
    const wrapper = document.querySelector('.wrapper')
  
    if (!wrapper) {
      createGrid(userSize)
    } else {
      wrapper.remove()
      createGrid(userSize)
    }
  
  })

// groovy(rgb) and classic mode(+10% opacity with each mouseover), functioning buttons
//const paintDivs =
// fully functioning size buttons

// add class for the shaking animation //

