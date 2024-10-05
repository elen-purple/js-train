// Callback це функція яка передається іншій функції як аргумент
const sumNumbers = function (numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};
const showResult = function (callback, ...numbers) {
  console.log(callback(numbers));
};
showResult(sumNumbers, 2, 5, 6, 7, 2, 6);
