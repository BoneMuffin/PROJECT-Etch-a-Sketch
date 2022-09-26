const resetButton = document.querySelector('button')
const container = document.querySelector('.container')

const rainbowRGB = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return { r, g, b }
}

const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for (let i = 0; i < amtOfGrids; i ++ ) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++) {
            const widthHeight = 960 / amtOfGrids;
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthHeight}px`
            gridBox.style.height = `${widthHeight}px`
            // changing brackground color with your mouse
            gridBox.addEventListener('mouseenter', () => {
                const opacity = Number(gridBox.style.opacity)
                gridBox.style.background = `rgb(0, 0, 0)`
                gridBox.style.opacity = opacity + .15
            });
            row.appendChild(gridBox)
        }

        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

resetButton.addEventListener('click', () => {
    let pxSize = Number(prompt('Pick a size!'))

    while (pxSize > 100) {
         pxSize = Number(prompt('Pick a smaller number, must be 100 or less!'))
    } 

    const wrapper = document.querySelector('.wrapper')

    if (!wrapper) {
        createGrid(pxSize)
    } else {
    wrapper.remove()
    createGrid(pxSize)
    }
});
