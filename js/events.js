//* Подія Submit може зібрати данні з форми та відправити їх по кліку на
//* кнопку з типом submit. Подію submit ми завжди чіпляємо саму форму а не кнопку
const form = document.querySelector(".form");
const users = [];
function testData(data) {
  users.push(data);
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = {
    login: event.target.elements.userLogin.value,
    email: event.target.elements.userEmail.value,
    password: event.target.elements.userPassword.value,
  };
  event.target.elements.userLogin.value = "";
  event.target.elements.userEmail.value = "";
  event.target.elements.userPassword.value = "";

  testData(userData);
  return userData;
});

//* Подія focus - натиск на інткрактивний об'єкт: посилання, кнопка, input
const input = document.querySelector("#radio-input");
input.addEventListener("focus", (event) => {
  event.target.style.boxShadow = "2px 2px 2px 2px red";
  event.target.style.outline = "none";
});
input.addEventListener("blur", (event) => {
  event.target.style.boxShadow = "none";
});

//* Подія input відслідковує введені символи в інпуті і одразу їх демонструє
const filmInput = document.querySelector(`input[data-name="film"]`);
filmInput.addEventListener("input", (e) => {
  console.log(e.target.value);
});

//* Подія change віддає всі введені символи після виходу з input
const bookInput = document.querySelector(`input[data-name="book"]`);
bookInput.addEventListener("change", (e) => {
  console.log(e.target.value);
});

//* Подія keydown/keyup прослуховується на document або window
window.addEventListener("keydown", (e) => {
  if (e.code === "KeyR") {
    document.body.style.backgroundColor = "red";
  }
  if (e.code === "KeyG") {
    document.body.style.backgroundColor = "green";
  }
  if (e.code === "KeyB") {
    document.body.style.backgroundColor = "blue";
  }
  if (e.code === "KeyW") {
    document.body.style.backgroundColor = "white";
  }
});

//Перемістити елемент з id="box" наліво, якщо користувач натискає стрілку
//вліво, та направо, якщо користувач натискає стрілку вправо, під час
//події keydown.

// const box = document.querySelector("#box");
// const moveBox = function () {
//   let horPosition = 0;
//   let verPosition = 0;
//   const distance = 50;

//   document.addEventListener("keydown", (e) => {
//     console.log(e.code);
//     if (e.code === "ArrowLeft") {
//       horPosition -= distance;
//     }
//     if (e.code === "ArrowRight") {
//       horPosition += distance;
//     }
//     if (e.code === "ArrowUp") {
//       verPosition -= distance;
//     }
//     if (e.code === "ArrowDown") {
//       verPosition += distance;
//     }
//     box.style.left = `calc(50% + ${horPosition}px)`;
//     box.style.top = `calc(50% + ${verPosition}px)`;
//   });
// };
// moveBox();

//* Створити кнопку на веб-сторінці, яка при натисканні на неї виводить
//* повідомлення "Hello, world!" в спливаючому вікні.
const alertBtn = document.querySelector("#alert-button");
alertBtn.addEventListener("click", () => {
  alert("Hello, world!");
});
