// const sizeButtons = document.querySelectorAll('.size');//
const eraseButton = document.querySelector('.erase');
const colorButtons = document.querySelectorAll('.mode');
const container = document.getElementById('grid-wrapper')

let currentColors = 'classicMode';

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

    wrapper.appendChild(row)
  } 
  container.appendChild(wrapper)
}


const groovyMode = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return { r, g, b }
}


eraseButton.addEventListener('click', () => {
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