const sizeButtons = document.querySelector('.size');
const modeButtons = document.querySelectorAll('.mode');
const eraseButton = document.querySelector('#erase-button'); 

const canvasContainer = document.querySelector('.canvas-container');
const redFrame = document.querySelector('.red-frame');

// requirements so far: 

// 16x16 default grid inside grid wrapper (960px wide), fully functioning for mouse events
// groovy(rgb) and classic mode(+10% opacity with each mouseover), functioning buttons
// fully functioning size buttons