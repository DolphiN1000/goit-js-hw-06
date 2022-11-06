// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
  nameInput: document.querySelector(`input#name-input`),
  nameOutput: document.querySelector(`span#name-output`),
};


console.log(refs.nameOutput.textContent);
console.log(refs.nameInput.textContent);

refs.nameInput.addEventListener(`input`, (event) => {
  event.currentTarget.value === ''
    ? (refs.nameOutput.textContent = 'Anonymous')
    : (refs.nameOutput.textContent = event.currentTarget.value);
    console.log(event.currentTarget.value);
});

