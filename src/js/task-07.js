// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
  controlSize: document.querySelector("input#font-size-control"),
  textSize: document.querySelector("span#text"),
};

refs.textSize.style.fontSize = `${refs.controlSize.value}px`;

refs.controlSize.addEventListener("input", (event) => {
  refs.textSize.style.fontSize = `${refs.controlSize.value}px`;
});
