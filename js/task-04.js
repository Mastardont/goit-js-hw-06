//
// Лічильник складається зі спану і кнопок,
// які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//
// Створи змінну counterValue,
//     в якій буде зберігатися поточне значення лічильника
//     та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок,
//     всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
//

const refs = {
  value: document.querySelector("#value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener("click", onDecrementValue);
refs.incrementBtn.addEventListener("click", onIncrementValue);

let counterValue = 0;

function onDecrementValue() {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}

function onIncrementValue() {
  counterValue += 1;
  refs.value.textContent = counterValue;
}
