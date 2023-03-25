//
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
//     перевіряє його вміст щодо правильної кількості введених символів.
//
// Яка кількість символів повинна бути в інпуті,
//     зазначається в його атрибуті data - length.
// Якщо введена правильна кількість символів,
//     то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
//     які ми вже додали у вихідні файли завдання.
//
const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", onValidationInput);

const quantitySymbols = Number(validationInputEl.attributes[2].value);

function onValidationInput(event) {
  event.target.value.length === quantitySymbols
    ? validationInputEl.classList.add("valid")
    : validationInputEl.classList.add("invalid");

  event.target.value.length !== quantitySymbols
    ? validationInputEl.classList.remove("valid")
    : validationInputEl.classList.remove("invalid");
}
