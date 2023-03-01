function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');

bodyEl.addEventListener('click', onColorChange)

function onColorChange(event) {
 const  hexColor = getRandomHexColor();
  event.currentTarget.style.backgroundColor = hexColor;
  colorEl.textContent = hexColor;
  
}