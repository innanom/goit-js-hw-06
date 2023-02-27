const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstItemEl = document.createElement('li');
firstItemEl.textContent = 'Potatoes';
firstItemEl.classList.add('item');

const secondItemEl = document.createElement('li');
secondItemEl.textContent = 'Mushrooms';
secondItemEl.classList.add('item');

const thirdItemEl = document.createElement('li');
thirdItemEl.textContent = 'Garlic';
thirdItemEl.classList.add('item');

const fourthItemEl = document.createElement('li');
fourthItemEl.textContent = 'Tomatos';
fourthItemEl.classList.add('item');

const fifthItemEl = document.createElement('li');
fifthItemEl.textContent = 'Herbs';
fifthItemEl.classList.add('item');

const sixthItemEl = document.createElement('li');
sixthItemEl.textContent = 'Condiments';
sixthItemEl.classList.add('item');

const listIngredientsEl = document.querySelector('#ingredients');
listIngredientsEl.append(firstItemEl, secondItemEl, thirdItemEl, fourthItemEl, fifthItemEl, sixthItemEl);




