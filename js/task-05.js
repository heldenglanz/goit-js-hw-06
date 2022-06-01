const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log(inputEl);
console.log(outputEl);





function replaceText(e) {
    const inputText = e.target.value.trim();
    outputEl.textContent = inputText ? inputText : "Anonymous";
}

inputEl.addEventListener('input', replaceText);