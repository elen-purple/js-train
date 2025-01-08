//* метод querySelector знаходить потрібний нам елемент у DOM-дереві
// const boxElement = document.querySelector("div");
// const boxElement = document.querySelector(".box");
// const boxElement = document.querySelector("#box");
// console.log(boxElement);
// const linkElement = document.querySelector("[href]");
// console.log(linkElement);
// const allItemsElements = document.querySelectorAll(".item");
// console.log(allItemsElements);
// const listElement = document.querySelector(".list");
// console.log(listElement);
// const allItems = listElement.children;
// console.log(allItems);
// const firstChild = listElement.firstElementChild;
// console.log(firstChild);
// const lastChild = listElement.lastElementChild;
// console.log(lastChild);

// const textElement = document.querySelector(".text");
// console.log(textElement);
// textElement.textContent = "Pretty Kitties";

// const page = document.body;
// page.style.backgroundColor = "orange";

// textElement.style.color = "white";
// linkElement.style.fontSize = "30px";

// const photoElement = document.querySelector(".img");
// photoElement.src =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWjRVT9Vw5XZDGO9fMOYhF3cBZm7dma2tMKA&s";
// photoElement.alt = "cat";
// console.log(photoElement.classList.contains("img"));
// photoElement.classList.add("cat");
// photoElement.classList.remove("img");

// document.querySelector(".cat").style.border = "2px red solid";

// 1. Отримайте доступ до списку
// 2. Додайте жовтий колір фону
// 3. Додайте клас "site-nav__link" до першого посилання
// 4. Збільшіть розмір шрифта посилання з атрибутом href="https://"
// const listElement = document.querySelector(".site-nav");
// listElement.style.backgroundColor = "yellow";
// listElement.firstElementChild.firstElementChild.classList.add("site-nav__link");
// listElement.querySelector(`[href="https://"]`).style.fontSize = "20px";

//1. Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.
//2. Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями
//3. Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу.
//4. Замініть клас на заголовку.
//5. Перевірте чи містить посилання клас list
// document.querySelector(`[href="http://google.com"]`).style.color = "orange";
// document.querySelector(`[href="ftp://ftp.com/my.zip"]`).style.color = "orange";
// document.querySelector(`[href="http://nodejs.org"]`).style.color = "orange";
// document.querySelector(`[href="http://internal.com/test"]`).style.color =
//   "orange";

// document
//   .querySelectorAll(`[href^="http://"]`)
//   .forEach((elem) => (elem.style.color = "orange"));

// console.log();
// const allLinks = document.querySelectorAll(`a+ul a`);
// const firstLink = allLinks[0];
// const lastLink = allLinks[allLinks.length - 1];
// firstLink.classList.add("element");
// lastLink.classList.add("element");
// document
//   .querySelectorAll(".element")
//   .forEach((element) => (element.style.background = "red"));
