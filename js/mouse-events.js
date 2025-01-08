//* Подія mouseover - відслідковує коли на елемент наводиться курсор, а mouseout - коли перестає наводитись
// const box = document.querySelector("#color-box");
// box.addEventListener("mouseover", (e) => {
//   e.currentTarget.style.backgroundColor = "salmon";
// });

// box.addEventListener("mouseout", (e) => {
//   e.currentTarget.style.backgroundColor = "dark";
// });

// box.addEventListener("mousemove", (e) => {
//   e.target.textContent = `${e.offsetX} ${e.offsetY}`;
// });

// Написати скрипт в якому користувач друкує на клавіатурі текст який
// відображається на сторінці.При натисканні на кнопку “Очистити”
// очищувати надрукований текст.Використати можна наступну розмітку

// const clearBtn = document.querySelector(".js-clear");
// const text = document.querySelector(".js-output");

// window.addEventListener("keydown", (e) => {
//   if (e.code === "Space") {
//     text.textContent += " ";
//   } else {
//     text.textContent += e.key;
//   }
// });

// clearBtn.addEventListener("click", () => {
//   text.innerHTML = "";
// });

// Змінити фон елементу з id="box" на жовтий, якщо користувач натискає
// клавішу y, та на зелений, якщо користувач натискає клавішу g, під час
// події keydown.

const box = document.querySelector("#box");
window.addEventListener("keydown", (e) => {
  if (e.code === "KeyY") {
    box.style.backgroundColor = "yellow";
  } else if (e.code === "KeyG") {
    box.style.backgroundColor = "green";
  } else if (e.code === "KeyR") {
    box.style.backgroundColor = "red";
  } else if (e.code === "KeyB") {
    box.style.backgroundColor = "blue";
  } else if (e.code === "KeyW") {
    box.style.backgroundColor = "white";
  } else if (e.code === "KeyP") {
    box.style.backgroundColor = "pink";
  } else if (e.code === "KeyV") {
    box.style.backgroundColor = "violet";
  } else if (e.code === "KeyO") {
    box.style.backgroundColor = "orange";
  } else if (e.code === "KeyI") {
    box.style.backgroundColor = "indigo";
  } else if (e.code === "KeyB") {
    box.style.backgroundColor = "brown";
  } else if (e.code === "KeyS") {
    box.style.backgroundColor = "salmon";
  } else if (e.code === "KeyF") {
    box.style.backgroundColor = "firebrick";
  } else if (e.code === "KeyA") {
    box.style.backgroundColor = "aquamarine";
  } else if (e.code === "KeyC") {
    box.style.backgroundColor = "coral";
  } else {
    box.style.backgroundColor = "gray";
  }
});

// Написати програму яка буде за допомогою миші рухати блок на екрані.
// Цей код повинен прослуховати подію mousemove на документі та рухати
// блок на відстань, яку миша змістилася відносно центру блоку.Якщо вам
// потрібно рухати саме центр блоку, ви можете додати до відстані половину
// ширини та висоти блоку.Можна використати код та підказки нижче 👇

// const block = document.querySelector(".block");

// document.addEventListener("mousemove", (e) => {
//   const mouseX = e.clientX;
//   const mouseY = e.clientY;
//   block.style.left = `${mouseX}px`;
//   block.style.top = `${mouseY}px`;
// });
