


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');
const sending = ingredients.map((item) => {
  const newLiEl = document.createElement("li");
  newLiEl.textContent = item;
  newLiEl.classList.add("item");
  return newLiEl;
});
ingredientsEl.append(...sending);
console.log(sending);


