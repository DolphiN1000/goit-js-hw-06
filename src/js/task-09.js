// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBg() {}

const href = {
  background: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
};
const handleClick = (event) => {
  href.background.style.backgroundColor = getRandomHexColor();
  href.color.textContent = href.background.style.backgroundColor;
};

href.button.addEventListener("click", handleClick);

// href.background.style.backgroundColor = '#030303';
console.dir(href.background.style.backgroundColor);
