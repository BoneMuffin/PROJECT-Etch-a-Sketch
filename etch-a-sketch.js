const resetButton = document.querySelector('button');
const grid = document.querySelector('#grid');

let currentColors = 'classic';

const groovyColors = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
     return {r, g, b};
}

const createGrid = (amtOfGrids = 32 * 44, cssClass = 'medium-grid') => {
    const gameWrapper = document.createElementById('grid');

    gameWrapper.innerHtml = '';
    gameWrapper.classList.remove("small-grid", "medium-grid", "big-grid");
    gameWrapper.classList.add('cssClass');

    for (let i = 0; i < amtOfGrids; i ++ ) {
        const row = document.createElement('div');
        gameWrapper.appendChild('row');
    }
}

const erase = document.querySelector('.erase');
    erase.addEventListener('click', function() {
        let val = document.getElementById()
    });

function painting(mode) {
    const gridItems = document.querySelectorAll('#grid >div');

    gridItems.forEach((item) => {
        const gridItem = item;
        gridItem.count = 0;
        gridItem.addEventListener('mouseenter', (e) => {
        if (mode === 'classic') {
           
            gridItem.addEventListener('mouseenter', () => {                
                const opacity = Number(gridItem.style.opacity)
                gridItem.style.background = `rgb(0, 0, 0)`
                gridItem.style.opacity = opacity + .15
        });
        row.appendChild(gridItem);
     }
    });
    grid.appendChild(gridItems);
 });
}