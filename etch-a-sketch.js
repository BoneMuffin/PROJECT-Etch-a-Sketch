const sizeButton = document.querySelectorAll(".small.medium.big");
const resetButton = document.querySelector('button');
const grid = document.querySelector("#grid");

const createGrid = (size = 32 * 44, cssClass = "medium-grid") => {
    const gameWrapper = document.getElementById('grid');

    gameWrapper.innerHTML = '';

    gameWrapper.classList.remove("small-grid", "medium-grid", "big-grid");
    gameWrapper.classList.add(cssClass);

    for (let i = 0; i < size; i += 1) { // spawn default grid
        const div = document.createElement('div');
        gameWrapper.appendChild(div);
    }
}

