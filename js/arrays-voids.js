//* Метод split робить з рядка масив
{
  const message = "My name is Anna";
  console.log(message);
  const letters = message.split("");
  console.log(letters);
  const words = message.split(" ");
  console.log(words);
}
//* Метод join робить з масива рядок
{
  const message = ["Anna", "Mary", "Artem"];
  console.log(message);
  const letters = message.join("");
  console.log(letters);
  const words = message.join("✿");
  console.log(words);
}
//* Метод indexOf повертає індекс першого елемента, що підходить. Якщо не знайшов повертає -1
{
  const message = ["Anna", "Mary", "Artem"];
  console.log(message);
  const letters = message.indexOf("Artem");
  console.log(letters);
  const words = message.indexOf("Lika");
  console.log(words);
}
//* Метод includes повертає true чи false, якщо знайшов або не знайшов
{
  const message = ["Anna", "Mary", "Artem"];
  console.log(message);
  const letters = message.includes("Artem");
  console.log(letters);
  const words = message.includes("Lika");
  console.log(words);
}
//* Методи unshift видаляє перший елемент та повертає його і shift додає перший елемент
{
  const message = ["Anna", "Mary", "Artem"];
  console.log(message);
  const letters = message.shift();
  console.log(letters);
  const words = message.unshift("Lika");
  console.log(words);
}
//* Методи pop видаляє останій елемент та повертає його і push додає останій елемент
{
  const message = ["Anna", "Mary", "Artem"];
  console.log(message);
  const letters = message.pop();
  console.log(letters);
  const words = message.push("Bill");
  console.log(words);
}
//* Метод slice повертає виділені елементи, не змінюючи масив
// {
//   const message = ["Anna", "Mary", "Artem"];
//   console.log(message);
//   const letters = message.slice(0, 2);
//   console.log(letters);
//   const words = message.slice(0, message.length);
//   console.log(words);
// }
//* Метод splice змінює масив
const friends = ["Mary", "Lika", "Vika", "Lilia"];
// console.log(friends);
// const bestFriends = friends.splice(0, 2);
// Видалення
// "Mary", "Lika", "Vika", "Lilia"
// "Vika", "Lilia"
// "Mary", "Lika"

// const myFriends = friends.splice(2, 0, "Artem", "Vanya");
// console.log(friends);
// console.log(myFriends);
//* Додавання
// "Mary", "Lika", "Vika", "Lilia"
// "Mary", "Lika", "Artem", "Vanya", "Vika", "Lilia"

// console.log(friends);
// const bestFriend = friends.splice(1, 1, "Alla", "Villy");
// console.log(friends);
//* Оновлення
// "Mary", "Lika", "Vika", "Lilia"
// "Mary", "Alla", "Villy", "Vika", "Lilia"

// const styles = ["Джаз", "Блюз"];
// styles.splice(styles.length, 0, "Рок-н-ролл");
// styles.splice(1, 1, "Класика");
// console.log(styles.splice(0, 1));
// styles.splice(0, 0, "Реп", "Реггі");
// console.log(styles);

// const word = toString(prompt("Введіть будь-яке слово"));
// const array = word.split("");
// let message = "";
// for (let letter of array) {
//   if (letter === letter.toLocaleLowerCase()) {
//     letter = letter.toLocaleUpperCase();
//   } else {
//     letter = letter.toLocaleLowerCase();
//   }
//   message += letter;
// }
// alert(message);

const numbers = [5, 3, 1, 6];
const yourNumbers = numbers.slice(1, 3);
console.log(numbers);
console.log(yourNumbers);
const copyNumbers = numbers.slice();
console.log(copyNumbers);

const myMessage = "Hello world!";
const oneWord = myMessage.slice(6, 11);
console.log(myMessage);
console.log(oneWord);
