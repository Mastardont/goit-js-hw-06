//
// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль
//     по кліку на button.change - color
//     і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.
//

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const buttonChangeColorEl = document.querySelector(".change-color");
const spanValueColorEl = document.querySelector(".color");

buttonChangeColorEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanValueColorEl.textContent = bodyEl.style.backgroundColor;
}
