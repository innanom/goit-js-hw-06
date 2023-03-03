const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

spanEl.style.fontSize = "16px";
inputEl.value = "16";

inputEl.addEventListener("input", (event) =>
        spanEl.style.fontSize = event.currentTarget.value + 'px'
);
    
   