function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

buttonEl.addEventListener('click', onColorChange)

function onColorChange() {
 const  hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  colorEl.textContent = hexColor;
}