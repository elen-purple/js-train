//Напиши скрипт пошуку логіна
// - Якщо логіна немає, вивести повідомлення
//'Користувач [логін] не знайдено.'
//- Якщо знайшли логін, вивести повідомлення
//'Користувач [логін] знайдено.'

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";

const checkLogins = (logins, userLogin) => {
  let isLogin = false;
  for (const login of logins) {
    if (login === userLogin) {
      isLogin = true;
      break;
    }
  }
  return isLogin;
};

const makeAnswer = (callback, logins, userLogin) => {
  let message = `Користувач ${userLogin} не знайдено.`;
  const isLogin = callback(logins, userLogin);
  if (isLogin) {
    message = `Користувач ${userLogin} знайдено.`;
  }
  return message;
};

console.log(makeAnswer(checkLogins, logins, loginToFind));

//Напиши функцию findSmallesNumber(numbers) пошуку
//самого маленького числа в масиві, при умові, що числа
//унікальні(не повторюються).

const findSmallesNumber = (numbers) => {
  let theSmallestNumber = numbers[0];
  for (const number of numbers) {
    if (theSmallestNumber > number) {
      theSmallestNumber = number;
    }
  }
  return theSmallestNumber;
};

console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4
