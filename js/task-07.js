// Напиши скрипт, который реагирует
// на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться
// размер текста.

const stringControl = document.querySelector('#font-size-control');
const textContent = document.querySelector('#text');

console.log(stringControl, textContent);


function sizingText(event) {
    const swapper = event.currentTarget.value;
     textContent.style.fontSize = swapper + "px";
// console.log(event.currentTarget.value)
 }

stringControl.addEventListener('input', sizingText);