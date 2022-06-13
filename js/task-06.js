// Напиши скрипт, который при потере фокуса на инпуте
//     (событие blur), проверяет его содержимое
//     на правильное количество введённых символов.

// Сколько символов должно быть в инпуте,
//     указывается в его атрибуте data - length.
// Если введено подходящее количество символов,
//     то border инпута становится зелёным,
//         если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
//     которые мы уже добавили в исходные файлы задания.



const inputMain = document.querySelector("#validation-input");
const valid = document.querySelector("#validation-input.valid");
const invalid = document.querySelector("#validation-input.invalid")


function blurChecking(event) {
    const inputLength = Number(event.target.value.trim().length);
   const dataLength = Number(event.target.getAttribute("data-length"));
    // console.log(event.target.getAttribute("text"))
    if (inputLength === dataLength) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
        return
    }
     event.target.classList.add('invalid');
    return event.target.classList.remove('valid');
}



inputMain.addEventListener("blur", blurChecking);
// inputMain.addEventListener("input", checkInputNumbers);