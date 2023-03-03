function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Алгоритм
// 1.

const controlsEl = document.querySelector('#controls')
const boxesEl = document.querySelector('#boxes')

console.log(controlsEl);
console.log(boxesEl);

const firstBoxEl = document.createElement('div')
firstBoxEl.style.width = "30px";
firstBoxEl.style.height = "30px";
firstBoxEl.style.background = getRandomHexColor()

// console.log(boxesEl.append(firstBoxEl));

controlsEl.addEventListener('click', (event) => 
  boxesEl.append(firstBoxEl)
);

// function createBoxes(amount) {

// }
// function destroyBoxes() {

// }