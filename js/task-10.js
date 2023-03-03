function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



const inputEl = document.querySelector('input[type=number]')
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const allBoxesEl = document.querySelector('#boxes');

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  allBoxesEl.innerHTML = "";
}

function createBoxes(amount) {
  amount = inputEl.value;
  let widthBox = 30;
  let heightBox = 30;
 
 
  for (let i = 0; i < inputEl.value; i++) {
    const boxEl = document.createElement('div')
    boxEl.style.backgroundColor = getRandomHexColor()
    boxEl.style.width = `${widthBox}px`;
    boxEl.style.height = `${heightBox}px`;
    widthBox += 10;
    heightBox += 10;

    allBoxesEl.append(boxEl);
    // console.log(allBoxesEl);
  } 
 }


