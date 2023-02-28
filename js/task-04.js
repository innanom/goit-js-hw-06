let counterValue = 0;

const counterEl = document.querySelector('#counter');
const valueEl = document.querySelector('#value')

function onDecrementCounterValue() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function onIncrementCounterValue() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}
counterEl.firstElementChild.addEventListener('click', onDecrementCounterValue);
counterEl.lastElementChild.addEventListener('click', onIncrementCounterValue)