document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  console.dir(form);
  form.addEventListener('submit', handleSubmit);

  const list = document.querySelector('#reading-list');
  list.appendChild(newParaItem);
});

const handleSubmit = function () {
  event.preventDefault();
  // const newParaItem = document.createElement('p');
  // newParaItem.textContent = `Title: ${this.title.value} | Author: ${this.author.value} | Category: ${this.category.value}`;
  // newParaItem.classList.add('recorded-item');
  const submitText = document.querySelector('#reading-list');
  submitText.textContent = `Title: ${this.title.value} | Author: ${this.author.value} | Category: ${this.category.value}`;
};
