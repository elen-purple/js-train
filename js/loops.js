// ***** 1
// for (let i = 0; i < 10; i++) {
//   console.log(`i = ${i}`);
// }
// ***** 2
// let text = "";
// for (let i = 0; i < 50; i++) {
//   text += i + ", ";
//   console.log(text);
// }
// ***** 3
// text = "";
// for (let i = 0; i < 62; i += 3) {
//   text += i + ", ";
// }
// console.log(text);
// ***** 4
// text = "";
// for (let i = 0; i < 62; i += 1) {
//   if (i % 2 === 0) {
//     text += i + ", ";
//   }
// }
// console.log(text);
// ***** 5
// let text = "";
// for (let i = 0; i < 20; i++) {
//   if (i === 13) {
//     continue;
//   } else {
//     text += i + ", ";
//   }
// }
// console.log(text);
// ***** 6
// let text = "";
// for (let i = 0; i < 20; i++) {
//   if (i % 2 === 1) {
//     text += i + ", ";
//   }
// }
// console.log(text);
// ***** 7
// let text = "";
// for (let i = 12; i > 2; i--) {
//   if (i < 7) {
//     break;
//   } else {
//     text += i + ", ";
//   }
// }
// console.log(text);
// ***** 8
// const marks = [10];
// let markSum = 0;
// for (let i = 0; i < 10; i++) {
//   if (i === 0) {
//     marks[i] = parseInt(prompt("Введіть першу оцінку учня"));
//   } else {
//     marks[i] = parseInt(prompt("Введіть наступну оцінку учня"));
//   }
//   console.log(marks[i]);
// }

// for (let i = 0; i < marks.length; i++) {
//   markSum += marks[i];
// }
// const averageMark = markSum / marks.length;
// console.log(`Середня оцінка учня ${averageMark}.`);
// ***** 9
// const employees = 6;
// let totalSalary = 0;
// for (let i = 0; i < employees; i++) {
//   totalSalary += Math.round(Math.random() * (5000 - 500) + 500);
// }
// console.log(`Загальна сума зарплат працівників ${totalSalary}грн`);
// ***** 10

// const min = parseInt(prompt("Введіть мінімальне число від 0 до 5"));
// const max = parseInt(prompt("Введіть максимальне число від 5 до 10"));
// let sum = 0;

// for (let i = min; i < max; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// let number = "";
// let message = ``;
// do {
//   number = parseInt(prompt("Введіть число більше 100"));
// } while (number < 100);
// alert(`Ваше число ${number} більше 100`);

// let number = "";
// let message = ``;
// do {
//   number = prompt("Введіть число більше 100");
//   console.log(number);
// } while (Number.parseInt(number) < 100 && number !== null);
// if (number === null) {
//   alert("Ви відмовились вводить число більше 100");
// } else {
//   alert(`Ваше число ${number} більше 100`);
// }

const ADMIN_PASSWORD = "jqueryismyjam";
let password = "";
let message;
do {
  if (password === "") {
    password = prompt("Введіть пароль до адмін панелі");
  } else {
    alert("Доступ заборонений, невірний пароль!");
    password = prompt("Введіть пароль до адмін панелі");
  }
} while (password !== ADMIN_PASSWORD && password !== null);
if (password === null) {
  message = "Скасовано користувачем!";
} else if (password === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
}
alert(message);
