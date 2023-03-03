const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listIngredientsEl = document.querySelector('#ingredients')

const newArray = ingredients.map((ingridient) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingridient;
  itemEl.classList.add('item')

  return itemEl;
});

listIngredientsEl.append(...newArray);







