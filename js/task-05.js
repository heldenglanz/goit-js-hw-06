const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log(inputEl);
console.log(outputEl);


    


function inputFunction(e) {
    console.log(e.target.value);
}

inputEl.addEventListener('input', inputFunction);