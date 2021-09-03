const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];
const ulEl = document.querySelector('#ingredients');

const list = ingredients.reduce((arr, ingred) => arr + `<li>${ingred}</li>`, '');

ulEl.innerHTML = list;
console.log(ulEl);
