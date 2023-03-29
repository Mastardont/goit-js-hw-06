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

const listIngredients = (list) => {
  return list.map((item) => {
    const listItemsEl = document.createElement("li");
    listItemsEl.classList.add("item");
    listItemsEl.textContent = item;

    return listItemsEl;
  });
};

const listItems = listIngredients(ingredients);
ingredientsEL.append(...listItems);
