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
const listWithId =  document.querySelector('ul#ingredients');

const lis = ingredients.map(ingredient => {
  const lists = document.createElement('li');
lists.textContent = ingredient;
lists.classList.add('item');
console.log(lists);
return lists;
})




console.log(listWithId);
// const lis = ingredients.map((ingredient) => {
//   getItemTemplate(ingredient);
//   console.log(ingredient);})
// console.log(lis);
listWithId.append(...lis);