function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const myBody = document.body;
const myButton = document.querySelector('.change-color')
const spanner = document.querySelector('.color')

function superColorChanger() {
const myColor = getRandomHexColor()
  myBody.style.background = myColor;
  spanner.textContent = myColor;
}






myButton.addEventListener('click', superColorChanger)