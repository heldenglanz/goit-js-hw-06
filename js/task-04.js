const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;



function decr() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

function incr() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

decrBtn.addEventListener('click', decr);
incrBtn.addEventListener('click', incr);