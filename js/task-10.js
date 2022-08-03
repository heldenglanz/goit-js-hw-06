// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, 
// коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divEl = document.querySelector('#boxes');

const controlsEl = document.querySelector('#controls')
const inputBox = controlsEl.children[0];
const createBTN = controlsEl.children[1];
const destrBTN = controlsEl.children[2];


createBTN.addEventListener('click', ()=>{
  let amount = inputBox.value;
  createBoxes(amount);
});

function createBoxes(amount) {

  for (let i=0; i<amount; i+=1){
    const boxEl = document.createElement('div');
   let sizeBox = 30;
   sizeBox += i*10;
boxEl.style.width = `${sizeBox}px`;
boxEl.style.height = `${sizeBox}px`;
boxEl.style.backgroundColor = getRandomHexColor();
divEl.appendChild(boxEl);
};
};


destrBTN.addEventListener('click', ()=>{
  destroyBoxes();
})
  function destroyBoxes(){
    divEl.innerHTML = "";
    inputBox.value = "";
  }




