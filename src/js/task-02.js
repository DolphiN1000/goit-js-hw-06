// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const getItemTemplate = (ingredien) => {
const lists = document.createElement('li');
lists.textContent = ingredien
lists.classList.add('item');
console.log(lists);
}

const refs = {
  list: document.querySelector('ul#ingredients'),
};
console.log(refs);
const lis = ingredients.map((ingredient) => {
  getItemTemplate(ingredient);
  console.log(ingredient);})
console.log(lis);
refs.list.insertAdjacentHTML('beforeend', lis.join(''));