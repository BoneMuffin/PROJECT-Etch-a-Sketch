const sizeOfGrid = 16;
const resetButton = document.querySelector('button')
const wrapper = document.querySelector(".wrapper");

const createGrid = (amtOfGrids) => {
    for (let i = 0; i < amtOfGrids; i ++ ) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for (let j = 0; j < amtOfGrids; j++) {
            const widthHeight = 960 / sizeOfGrid;
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthHeight}px`
            gridBox.style.height = `${widthHeight}px`

            // changing brackground color with your mouse
            gridBox.addEventListener('mouseenter', () => {
                gridBox.style.backgroundColor = 'black'
            })
            row.appendChild(gridBox)
        }
        wrapper.appendChild(row)
    }
}

createGrid(sizeOfGrid);