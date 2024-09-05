const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.getElementById("ingredients");

const fragment = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const newLi = document.createElement("li");
  const newContent = document.createTextNode(ingredient);
  newLi.classList.add('item');
  newLi.appendChild(newContent);
  fragment.appendChild(newLi);
});

list.appendChild(fragment);