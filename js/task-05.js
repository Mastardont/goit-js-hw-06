//
// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
//     підставляє його поточне значення в span#name - output. Якщо інпут порожній,
//     у спані повинен відображатися рядок "Anonymous".
//
const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", onNameChange);

function onNameChange(event) {
  event.currentTarget.value === ""
    ? (nameOutputEl.textContent = "Anonymous")
    : (nameOutputEl.textContent = event.currentTarget.value);
}
