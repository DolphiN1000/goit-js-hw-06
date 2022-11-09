// Завдання 3
// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGalls = document.querySelector("ul.gallery");
const newEl = ({ url, alt }) => `<li class='galList'><img src = "${url}" alt = "${alt}" width=450px ></li>` ;
const listGall = images.map(newEl).join("");
listGalls.insertAdjacentHTML("beforeend", listGall);
// listGalls.style.flex = 'true';
//  console.dir(listGalls);
const headStyle = document.querySelector('head');
const newStyle = `<style>
.gallery {
display: flex;
flex-wrap: wrap;
gap: 30px;
list-style: none;
}
</style>`;
headStyle.insertAdjacentHTML("beforeend", newStyle);