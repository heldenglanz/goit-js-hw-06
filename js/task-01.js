const mainUl = document.querySelector("ul")
const liSets = document.querySelectorAll(".set")
const titleEl = document.querySelectorAll("h2")


console.log(`Number of categories: ${mainUl.children.length}`);
console.log(`Category:${titleEl[0].textContent}`);
console.log(`Elements: ${liSets[0].children.length}`);
console.log(`Category:${titleEl[1].textContent}`);
console.log(`Elements: ${liSets[1].children.length}`);
console.log(`Category:${titleEl[2].textContent}`);
console.log(`Elements: ${liSets[2].children.length}`);
