// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const refs = {
  // step: document.querySelector('.step'),
  value: document.querySelector("#value"),
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]'),
};
let count = 0;
let step = 1;

const render = () => {
  refs.value.textContent = count;
};

const handleDecrement = () => {
  count -= step;
  render();
};

const handleIncrement = () => {
  count += step;
  render();
};

// const handleStepChange = (event) => {
//     step = Number(event.target.value);
// };

render();

refs.decrement.addEventListener("click", handleDecrement);
refs.increment.addEventListener("click", handleIncrement);
// refs.step.addEventListener('cange', handleStepChange);
