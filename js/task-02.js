//
// Напиши скрипт, який для кожного елемента масиву ingredients:
//
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
//
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEL = document.querySelector("#ingredients");

const listIngredients = (list) =>
  list.forEach((item) => {
    const listItems = document.createElement("li");
    listItems.classList.add("item");
    listItems.textContent = `${item}`;

    ingredientsEL.appendChild(listItems);
  });

listIngredients(ingredients);
