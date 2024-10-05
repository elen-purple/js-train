const message = "Я навчаюся в GoITeens в групі: ";
const myCours = "GoITeens_UA_FE_1y_16_23 (2) студенти";
console.log(message, myCours);
console.log(message.length + myCours.length);
console.log(message.toUpperCase(), myCours.toLowerCase());
const number = 20;
const isMoving = false;
const myFavorites = null;
let myAge;
console.log(typeof message);
console.log(typeof number);
console.log(typeof isMoving);
console.log(typeof myFavorites);
console.log(typeof myAge);

const name = "MacBook Pro 13″";
let price = 100000;
let contity = 2;
// console.log("Обрано" + name + ", ціна за штуку" + price + "кредитів");
console.log("Обрано", name, ", ціна за штуку", price * contity, "кредитів");
price = 200000;
console.log("Обрано", name, ", ціна за штуку", price * contity, "кредитів");

const yourName = prompt("Please enter your name");
console.log(yourName);

const question = confirm("Are you okay?");
console.log(question);
if (question == true) {
  const accept = alert("Дякую за підтвердження!");
} else {
  const unaccept = alert("Дію відмінено!");
}
