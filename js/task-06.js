const inputEl = document.querySelector('#validation-input');
const lengthEl = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', (event) => {
    if (event.target.value.length === lengthEl) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
        
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid')
    }
}
)


