document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  console.dir(form);
  form.addEventListener('submit', handleSubmit);

  const resetForm = document.querySelector('#new-item-form');
  console.dir(reset);
  reset.addEventListener('reset', handleReset);
});

const handleReset = function () {
  const myNode = document.getElementById('#reading-list');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
};

const handleSubmit = function () {
  event.preventDefault();
  // list.appendChild('#reading-list');

  const newItem = document.createElement('li');
  newItem.textContent = `Title: ${this.title.value} | Author: ${this.author.value} | Category: ${this.category.value}`;
  newItem.classList.add('item');

  const item = document.querySelector('#reading-list');

  item.appendChild(newItem);
  // newItem.textContent = `Title: ${this.title.value} | Author: ${this.author.value} | Category: ${this.category.value}`;
  // newItem.classList.add('display');
};
