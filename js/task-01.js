const categoriesEl = document.querySelector('#categories');
console.log('Number of categories:', categoriesEl.children.length);

const itemsCategoriesEl = document.querySelectorAll('.item');
itemsCategoriesEl.forEach(item => {
    const titleEl = item.firstElementChild.textContent;
    const totalEl = item.lastElementChild.children.length;
    console.log('Category:', titleEl);
    console.log('Elements:', totalEl);   
  }
);



