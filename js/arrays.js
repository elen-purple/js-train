// const numbers = [3, 5, 6, 7, 4];
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers[3]);
// const friends = ["Maria", "Andriy", "Mykola", "Svyatoslav"];
// console.log(friends.length);
// console.log(friends[2]);
// friends[4] = "Alisa";
// friends[5] = "Ulya";
// console.log(friends);
// const text = "";
// for (let i = 0; i < friends.length; i++) {
//   text += ", " + friends[i];
// }
// console.log(`My friend are ${text}`);
// console.log(
//   `My friend is ${
//     friends[Math.round(Math.random() * (friends.length - 1) + 1)]
//   }`
// );
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);

// const row1 = [1, 5, 3];
// const row2 = [6, 7, 2];
// const rows = [row1, row2];
// let sum = 0;
// for (let int = 0; int < rows; int++) {
//   for (let i = 0; i < rows[i]; i++) {
//     sum += rows[int][i];
//   }
// }
// console.log(sum);

// const clients = ["Alex", "Mary", "Anna", "Viktor"];
// const clientName = "Mary";
// let message = "";
// for (let i = 0; i < clients.length; i++) {
//   if (clientName === clients[i]) {
//     message = `Користувач ${clientName} знайдено.`;
//     break;
//   } else {
//     message = `Користувач ${clientName} не знайдено.`;
//   }
//   message = clients[i].includes(clientName)
//     ? `Користувач ${clientName} знайдено.`
//     : `Користувач ${clientName} не знайдено.`;
//   if (clients[i] === clientName) {
//     break;
//   }
// }

// for (const client of clients) {
//   if (client === clientName) {
//     message = `Користувач ${clientName} знайдено.`;
//     break;
//   } else {
//     message = `Користувач ${clientName} не знайдено.`;
//   }
// }

// console.log(message);

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
for (const number of numbers) {
  if (number % 2 === 0) {
    total += number;
  }
}

console.log(total);

// let num = 3;
// while (num) {
//   console.log(num);
//   num -= 1;
// }

// const numbers = [3, 2, 1];
// let i = 0;
// let sum = 0;
// while (i < numbers.length) {
//   sum += numbers[i];
//   i += 1;
// }
// console.log(sum);

// for (let number = 0; number < 5; number += 1) {
//   console.log(`Число ${number}`);
// }

// let number = 0;
// while (number < 5) {
//   console.log(`Число ${number}`);
//   number += 1;
// }
