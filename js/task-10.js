//
// Напиши скрипт створення і очищення колекції елементів.
//     Користувач вводить кількість елементів в input і натискає кнопку Створити,
//     після чого рендериться колекція.
//     Натисненням на кнопку Очистити, колекція елементів очищається.
//
// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//     Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
//
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//     Використовуй готову функцію getRandomHexColor для отримання кольору.
//
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//     у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputQuantityBoxesEl = document.querySelector("#controls > input");
const createBtnEl = document.querySelector("[data-create]");
const destroyBtnEl = document.querySelector("[data-destroy]");
const allBoxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", onQuantityBox);
destroyBtnEl.addEventListener("click", onDestroyBoxes);

function onQuantityBox() {
  const quantityBox = inputQuantityBoxesEl.value;
  onCreateBoxes(quantityBox);
}

function onCreateBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const boxEl = document.createElement("div");
    boxEl.classList.add("qwe");
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    allBoxesEl.appendChild(boxEl);
    size += 10;
  }
}

function onDestroyBoxes() {
  allBoxesEl.innerHTML = "";
  inputQuantityBoxesEl.value = 0;
}
