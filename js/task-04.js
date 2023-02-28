let counterValue = 0;

const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value')

function decrementCounterValue() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function incrementCounterValue() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
counterEl.firstElementChild.addEventListener('click', decrementCounterValue);
counterEl.lastElementChild.addEventListener('click', incrementCounterValue)