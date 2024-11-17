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
