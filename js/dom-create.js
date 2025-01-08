//* document.createElement(element)
// Створює елемент у пам'яті, але не на сторінці
// const section = document.createElement("section");
// const title = document.createElement("h1");
// const desc = document.createElement("p");
// const greenText = document.createElement("span");
// const whiteText = document.createElement("span");
// const redText = document.createElement("span");
// const button = document.createElement("button");
// const img = document.createElement("img");

// greenText.textContent = "Mamamia! ";
// whiteText.textContent = "Parmesano! ";
// redText.textContent = "Italiano!";
// desc.textContent = "Піцца італійська до вашого столу!";
// button.textContent = "Замовити";
// img.src =
//   "https://cappiadmin.com.ua/storage/uploads/blog/uDdqhBpAEPlCuvasZTWNah3FNrBu81vfE5qK9F7T.jpg";
// img.alt = "Pizza Italiana";
// img.width = "500";

// title.append(greenText, whiteText, redText);
// section.append(title, desc, button);
// button.after(img);
// const page = document.querySelector("body");
// page.prepend(section);

// section.style.backgroundColor = "black";
// greenText.style.color = "green";
// whiteText.style.color = "white";
// redText.style.color = "red";
// desc.style.color = "grey";
// метод append(element) додає елемент в середину іншого на кінці
// метод prepend(element) додає елемент в середину іншого на початку
// метод before(element) додає елемент в перед іншим
// метод after(element) додає елемент в після іншого
// console.log(page);

// створити статтю яка буде складатися з зображення інформації та кнопки
// та наповнити її відповідним контентом

// const article = document.createElement("article");
// const img = document.createElement("img");
// const title = document.createElement("h2");
// const text = document.createElement("p");
// const button = document.createElement("button");
// const page = document.querySelector("body");

// article.classList.add("article");

// img.src =
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemXUe-IwuSTIOZnwEvPzaLwUYbv7QrolgVw&s";
// img.alt = "Makaroon";
// img.width = "400";
// img.classList.add("article-img");

// title.textContent = "Історія макарунів";
// title.classList.add("article-title");

// text.textContent =
//   "Макаруни — це відомі французькі солодощі, які мають багатовікову історію. Їхній прототип виник у середньовічній Італії, де на основі мигдального борошна, яєчних білків і цукру створювали прості печива. У XVI столітті рецепт потрапив до Франції разом із Катериною Медічі. Там макаруни еволюціонували: у XIX столітті паризька кондитерська Ladurée впровадила їхній сучасний вигляд — два печива, з'єднані кремом або джемом. Сьогодні макаруни вражають різноманіттям кольорів і смаків, ставши символом французької культури десертів.";
// text.classList.add("article-desc");

// button.textContent = "Читати більше";
// button.type = "button";
// button.classList.add("article-button");

// article.append(img, title, text, button);
// page.prepend(article);

// const page = document.querySelector("body");
// const box = `
//       <h2 class="subtitle">Subtitle</h2>
//       <p class="text">Some peace of text</p>
//       <button>Press this button</button>
//       `;
// page.innerHTML = box;

// document.querySelector("body").innerHTML = `
//       <h2 class="subtitle">Subtitle</h2>
//       <p class="text">Some peace of text</p>
//       <button>Press this button</button>`;

//* innerHtml дозволяє глянути та замінити інформацію яка лежить між відкриваючим і закриваючим тегами

// const titleElement = document.querySelector(".title");
// console.log(titleElement.innerHTML);
// const articleElement = document.querySelector(".article");
// console.log(articleElement.innerHTML);

// articleElement.innerHTML = `<img src="" alt="">`;
// console.log(articleElement.innerHTML);
// console.log(articleElement);

//* insertAdjacentHTML дозволяє додати шматок html коду в елемент
// const boxElement = document.querySelector(".box");
// console.log(boxElement);
// boxElement.insertAdjacentHTML("afterbegin", `<p class="text">Anna</p>`);
// console.log(boxElement);

//* Методи роботи з атрибутами
//* setAttribute(attr, value);
//* hasAttribute(attr);
//* getAttribute(attr);
//* removeAttribute(attr);
//* attributes - властивість
// const link = document.createElement("a");
// link.href = "google.com"
// link.textContent = "Goggle";
// document.querySelector("body").prepend(link);
// link.setAttribute("href", "google.com");
// const isHaveHref = link.hasAttribute("href");
// console.log(isHaveHref);
// const hrefValue = link.getAttribute("href");
// console.log(hrefValue);

// const button = document.querySelector("[data-action]");
// console.log(button.dataset.action);

//* Практика
//Створити та додати колекцію кнопок з динамічними даними з масиву об’єктів.
// використати метод createElement

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const box = document.createElement("div");
colorPickerOptions.forEach((option) => {
  box.insertAdjacentHTML(
    "beforeend",
    `<button style="color: white; background-color: ${option.color}; cursor: pointer; border: 0px; padding: 12px 24px; font-size: 24px; border-radius: 100px;">${option.label}</button>`
  );
});
box.setAttribute("style", `display: flex; gap: 12px; flex-wrap: wrap`);
box.classList.add("color-picker");
box.classList.add("js-color-picker");
document.querySelector("body").prepend(box);
//  <div class="color-picker js-color-picker"></div>
