//
// Напиши скрипт, який:
//
// Порахує і виведе в консоль кількість категорій в ul#categories,
//     тобто елементів li.item.!!!!!!!!!!!!
// Для кожного элемента li.item у списку ul#categories,
//     знайде і виведе в консоль текст заголовку елемента(тегу < h2 >)
//     і кількість елементів в категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach()
// і властивості навігації по DOM.
//

const categoriesListEL = document.querySelector("#categories");
const itemsEL = document.querySelectorAll(".item");

const categoryInformation = (list, items) => {
  console.log(`Number of categories: ${list.children.length}`);

  items.forEach((item) => {
    console.log(`Category: ${item.children[0].textContent}`),
      console.log(`Elements: ${item.children[1].childElementCount}`);
  });
};

categoryInformation(categoriesListEL, itemsEL);
