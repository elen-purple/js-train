//* Перебираючі методи масивів
//! назваМасиву.назваМетоду((параметри)=>{тілоФункції})

//* forEach
// Метод fotEach є заміною циклу тому перебирає кожен елемент масиву та робить ту дію яку ми вказали у тілі колбека. Цей метод нічого не повертає
const friends = ["Magy", "Lana", "Viki"];
friends.forEach((friend, index, arr) => {
  console.log(`Friend ${friend} has index ${index} in array ${arr}`);
});
//Але у forEach не працює переривання циклу через break або continue
//* map
// Метод map перебирає оригінальний масив та змінює кожен елемент
// цього масива, повертає новий масив із зміненими елементами

const friendList = friends.map(
  (friend, index) => `Друг ${friend} під номером ${index + 1}`
);
console.log(friendList);
//* filter
// Метод filter пуребирає оригінальний масив, створює новий масив, в який додає ті елементи з оригінального, що відповідають умові
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];
const filteredNumbers = numbers.filter((number) => number % 3 === 0);
console.log(filteredNumbers);

const people = [
  { name: "John", age: 32, occupation: "programmer" },
  { name: "Jane", age: 26, occupation: "teacher" },
  { name: "Mike", age: 42, occupation: "engineer" },
  { name: "Emily", age: 17, occupation: "designer" },
];

const adults = people.filter((person) => person.age > 18);
console.log(adults);
//* some and every

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

//Використовуючи 👆 масив об’єктів виконай наступні завдання
//Отримати масив імен всіх гравців
const names = players.map((player) => player.name);
console.log(names);
//Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
const playersWithBiggerPoints = [
  ...players.map(({ ...player }) => {
    player.points += player.points * 0.1;
    return player;
  }),
];
console.log(playersWithBiggerPoints);
//Збільшити кількість годин гравця по id. Переписати на тернарник
players.find((player) => player.id === "player-3").timePlayed += 50;
console.log(players);
//Отримати масив всіх гравців онлайн
const onlinePlayers = players.filter((player) => player.online);
console.log(onlinePlayers);
//Отримати масив всіх гравців офлайн
const offlinePlayers = players.filter((player) => !player.online);
console.log(offlinePlayers);
//Отримати масив всіх хардкорних гравців з часом більше 250
const hardcorePlayers = players.filter((player) => player.timePlayed > 250);
console.log(hardcorePlayers);
//Знайти гравця по id
const theBestPlayer = players.find((player) => player.id === "player-4");
console.log(theBestPlayer);
//Знайти гравця по імені
const theWorstPlayer = players.find((player) => player.name === "Kiwi");
console.log(theWorstPlayer);
//Перевірити чи всі гравці мають час більше 200
const isAllPlayersHardcore = players.every((player) => player.timePlayed > 200);
console.log(isAllPlayersHardcore);
//Перевірити чи всі гравці онлайн
const isAllPlayerOnline = players.every((player) => player.online === true);
console.log(isAllPlayerOnline);

//! Переребераючий метод масиву reduce
const saleries = [2000, 3000, 2400, 1800];
//* Спосіб з циклом
// const allSaleries = 0;
// for (const salery of saleries) {
//   allSaleries += salery;
// }
//* Спосіб з reduce
const allSaleries = saleries.reduce((acc, salery) => acc + salery, 0);
// const назваЗмінної = масив.reduce((аккумулятор, елементМасиву, індекс, оригінальнийМасив) => діяЯкасьТам, початковеЗначенняАкумулятора)
console.log(allSaleries);

// Порахувати загальну кількість годин:
const videoPlayers = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
const countGeneralTimePlayed = (players) =>
  players.reduce((acc, player) => acc + player.timePlayed, 0);
console.log(countGeneralTimePlayed(videoPlayers));

// Порахувати загальну кількість товарів в кошику
const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = (cart) =>
  cart.reduce((acc, product) => acc + product.quantity, 0);
console.log(totalAmount(cart));

const totalPrice = (cart) =>
  cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
console.log(totalPrice(cart));

//Зробити статистику всіх тегів. Назву тега потрібно зробити ключем,
//значення якого буде кількістьповторень тегів в масиві.Якщо властивість
//з ключем tag є, збільшуємо його значення на 1 якщо властивості немає с
//таким ключем що в tag, створити і записати 1

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
// const makeStatisticsOfTags = (tweets) => {
//   // const allTags = tweets.reduce((acc, tweet) => {
//   //   acc += tweet.tags.map((tag) => tag);
//   //   console.log(acc);
//   //   console.log(tweet.tags.map((tag) => tag));
//   // }, "");
//   const allTags = [];
//   const statisticsOfTags = {};
//   for (const tweet of tweets) {
//     const { tags } = tweet;
//     for (const tag of tags) {
//       allTags.push(tag);
//     }
//   }
//   console.log(allTags);
//   for (let i = 0; allTags.length !== 0; i += 1) {
//     const firstTag = allTags[0];
//     let count = 0;
//     for (let s = 0; s < allTags.length; s += 1) {
//       if (firstTag === allTags[s]) {
//         // console.log(s);
//         // console.log(allTags);
//         console.log(allTags[s]);
//         // console.log(allTags.length);
//         console.log(firstTag);
//         allTags.splice(s, 1);
//         count += 1;
//       }
//     }
//     console.log(allTags.length);
//     // console.log(allTags);
//     if (statisticsOfTags.includes(firstTag)) {
//       statisticsOfTags[firstTag] += 1;
//     } else {
//       statisticsOfTags[firstTag] = count;
//     }
//   }
//   console.log(statisticsOfTags);
// };
// console.log(makeStatisticsOfTags(tweets));

const makeStatisticOfTags = tweets.reduce((statistic, tweet) => {
  const allTags = Object.keys(statistic);
  tweet.tags.forEach((tag) => {
    if (allTags.includes(tag)) {
      statistic[tag] += 1;
    } else {
      statistic[tag] = 1;
    }
  });
  return statistic;
}, {});
console.log(makeStatisticOfTags);

const nums = [0, 5, -3, 10, 0, 7, -1];
const message =
  "У масиві є такі числа: " +
  [...nums]
    .sort((a, b) => a - b)
    .reduce((message, number) => (message += number + ", "), "");
console.log(message);

//* Метод sort сортує елементи по зростанню від меншого до більшого або по алфавіту
//! Цей метод змінює оригінальний масив
//* Щоб не змінювати данні оригінального масиву, зробіть перед сортуванням копію, в якій і посортуємо елементи

const userNames = [
  "Anna",
  "Mary",
  "Vicktor",
  "Nikita",
  "George",
  "Kiril",
  "Jastin",
  "Katie",
];
const sortedNames = [...userNames].sort((a, b) => a.localeCompare(b));
const revertSortedNames = [...userNames].sort((a, b) => b.localeCompare(a));
console.log(sortedNames);
console.log(revertSortedNames);

//Відсортуйте масив об'єктів за зростанням значення властивості
//date в форматі dd / mm / yyyy.
const events = [
  { name: "Event 1", date: "10/02/2023" },
  { name: "Event 2", date: "15/03/2023" },
  { name: "Event 3", date: "01/01/2023" },
  { name: "Event 4", date: "01/02/2023" },
];

events.sort((a, b) => {
  const dateA = new Date(a.date.split("/").reverse().join("-"));
  const dateB = new Date(b.date.split("/").reverse().join("-"));
  // console.log(dateA);
  return dateA - dateB;
});

// events.sort(
//   (a, b) =>
//     new Date(a.date.split("/").reverse().join("-")) -
//     new Date(b.date.split("/").reverse().join("-"))
// );
console.log(events);

// Відсортуйте масив об'єктів за спаданням значення властивості
//popularity, а при однаковому значенні popularity - за алфавітом
//значення властивості name.
const items = [
  { name: "Item B", popularity: 5 },
  { name: "Item A", popularity: 5 },
  { name: "Item C", popularity: 2 },
  { name: "Item D", popularity: 3 },
];

items.sort((a, b) => {
  if (a.popularity === b.popularity) {
    return a.name.localeCompare(b.name);
  } else {
    return b.popularity - a.popularity;
  }
});
console.log(items);

//Відсортувати масив об'єктів за алфавітом в полі name:
const arr = [
  { name: "John", age: 32 },
  { name: "Jane", age: 26 },
  { name: "Mike", age: 42 },
  { name: "Emily", age: 29 },
];
arr.sort((a, b) => a.name.localeCompare(b.name));
console.log(arr);
