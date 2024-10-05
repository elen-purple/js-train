const laptop = {
  brand: "acer",
  year: 2023,
  users: "Aniuta",
};
const showValues = (object) => {
  console.log("All parametres");
  for (const key in object) {
    console.log(`${key}: ${object[key]}`);
  }
};
showValues(laptop);

// const fruitBasket = {
//   apple: 50,
//   grape: 120,
//   lemon: 70,
//   strawberry: 90,
// };

// const countSum = (basket) => {
//   let sum = 0;
//   for (const key in basket) {
//     sum += basket[key];
//   }
//   return sum;
// };

// console.log(countSum(fruitBasket));

console.dir(Object);

// const Object = {
//     keys() {

//     }
// }

// Object.keys();
//* Даний метод витягує всі ключі з обʼєкту та робить їх масивом

const user = {
  name: "Viliam",
  surname: "Robert",
  age: 32,
};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const fruitBasket = {
  apple: 50,
  grape: 120,
  lemon: 70,
  strawberry: 90,
};
const countSum = (basket) => {
  const prices = Object.values(basket);
  let sum = 0;
  for (const price of prices) {
    sum += price;
  }
  return sum;
};

console.log(countSum(fruitBasket));
