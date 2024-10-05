const myFruit = "pineapple";
function showMessage(fruit) {
  const message = `I love ${fruit}`;
  const bigMessage = message.toUpperCase();
  return bigMessage;
}
const result = showMessage(myFruit);
console.log(result);

// const userName = prompt("Enter your name");
//* Є два способи створити функцію
//* 1. Оголосити функцію (function declaration)
// console.log(makeGreetings("Nina"));
// Створимо функцію
// function makeGreetings(name) {
//   const greetings = `Hi, ${name}`;
//   return greetings;
//   return `Hi, ${name}`;
// }
// Покличемо створену функцію
// alert(makeGreetings(userName));

//* 2. Функціональний вираз (function expression)
// Створюємо функцію
// const makeGreetings = function (name) {
//   return `Hi, ${name}`;
// };
// Покличемо створену функцію
// const greetings = makeGreetings(userName);
// alert(greetings);

// console.log(makeGreetings("alla"));
//* У функціональному виразі спочатку треба ініцалізувати змінну
//* а потім використовувати

//Напишіть функцію mul(n, m), яка приймає два аргументи і повертає добуток,
//суму і різницю цих аргументів.Перевірте її роботу.

// const mul = function (n, m) {
//   const sum = n + m;
//   const sub = n - m;
//   const multi = n * m;
//   const message = `Сума - ${sum}, Різниця - ${sub}, Добуток - ${multi}`;
//   return message;
// };
// console.log(mul(5, 2));

//Розглянемо як працювати з декількома аргументами
// const addNumbers = function (a, b) {
//   return a + b;
// };
// const sumResult = addNumbers(2, 6);
// console.log(sumResult);

// const sumResult2 = addNumbers(2, 6, 4);
// console.log(sumResult2);

// const addNumbers = function (numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// const sumResult = addNumbers([2, 6]);
// console.log(sumResult);

// const sumResult2 = addNumbers([5, 6, 4]);
// console.log(sumResult2);

//Напиши функцію myAverageScore , яка у якості аргументу отримує масив
//з оцінками, і виводить користувачу його середній результат у наступному
//форматі:
//My average score: A (якщо середня оцінка від 91 до 100)
//My average score: B (якщо середня оцінка від 81 до 90)
//My average score: C (якщо середня оцінка від 71 до 80)
//My average score: D (якщо середня оцінка від 70 і менше)
//Для перевірки:

const myAverageScore = function (marks) {
  let sum = 0;
  for (const mark of marks) {
    sum += mark;
  }
  const averageMark = sum / marks.length;
  let averageScore = "";
  if (averageMark > 90 && averageMark < 101) {
    averageScore = "A";
  } else if (averageMark > 80 && averageMark < 91) {
    averageScore = "B";
  } else if (averageMark > 70 && averageMark < 81) {
    averageScore = "C";
  } else if (averageMark < 71 && averageMark > -1) {
    averageScore = "D";
  } else {
    averageScore = "The mark doesn't exist";
  }
  const message = `My average score: ${averageScore}`;
  return message;
};

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));

// function sumNumbers(a, b, c = 0) {
//   return a + b + c;
// }

// console.log(sumNumbers(4, 6, 5));

// function sumNumbers() {
//   console.log(arguments); // --> [4, 6, 3]
//   let sum = 0;
//   for (const a of arguments) {
//     sum += a;
//   }
//   return sum;
// }

// console.log(sumNumbers(4, 6, 3));
// console.log(sumNumbers(4, 6, 3, 8, 1));
// console.log(sumNumbers(4, 6));

// arguments це псевдомасив, в якій записуються аргументи в параметри
// у порожніх дужках
// в arguments є мінус -- на цьому масиві працюють не всі методи масивів
// тому глянемо як зробити з псевдомасива arguments звичайний масив

// function sumNumbers() {
//   const numbers = Array.from(arguments);
//   console.log(numbers);
//   let sum = 0;
//   for (const a of numbers) {
//     sum += a;
//   }
//   return sum;
// }

// console.log(sumNumbers(4, 6, 3));
// console.log(sumNumbers(4, 6, 3, 8, 1));
// console.log(sumNumbers(4, 6));

//Є інший спосіб зібрати аргументи у масив -- це операція rest як три крапочки

// function sumNumbers(...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (const a of numbers) {
//     sum += a;
//   }
//   return sum;
// }

// console.log(sumNumbers(4, 6, 3));
// console.log(sumNumbers(4, 6, 3, 8, 1));
// console.log(sumNumbers(4, 6));

function makesMessage(...names) {
  const namesString = names.join(", ");
  const message = `Мої друзі -- це ${namesString}`;
  return message;
}

console.log(makesMessage("Марія", "Василь", "Людмила"));
console.log(makesMessage("Марія", "Василь", "Людмила", "Марк"));
console.log(makesMessage("Марія"));
