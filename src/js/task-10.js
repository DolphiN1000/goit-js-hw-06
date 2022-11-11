// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const contriolss = document.querySelector("controls");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputValue = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

function inputBoxes() {
  const countBoxes = inputValue.valueAsNumber;
  const arrBoxes = createBoxes(countBoxes);
  refreshBoxes(arrBoxes);
}

function createBoxes(countBoxes) {
  console.log(countBoxes);
  if (countBoxes == "NaN") {
    alert("Pleas select number");
  } else {
    const arrBoxes = [];
    let size = 30;
    for (let i = 0; i < countBoxes; i += 1) {
      const sting = `<div class = 'divBox' style='width: ${size}px; height: ${size}px; background: ${getRandomHexColor()}'></div>`;
      size += 10;
      arrBoxes.push(sting);
    }
    return arrBoxes.join("");
  }
}

function refreshBoxes(arrBoxes = "") {
  boxes.innerHTML = arrBoxes;
}

createBtn.addEventListener("click", inputBoxes);
destroyBtn.addEventListener("click", () => {
  refreshBoxes([]);
});

