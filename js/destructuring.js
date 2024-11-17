// const toy = {
//   name: "Lama",
//   author: {
//     name: "Anna",
//     surname: "Havrylova",
//     age: 13,
//     location: {
//       vilageOrCity: "Sofiyivskia Borshchahivka",
//       regon: "Kyiv",
//       country: "Ukraine",
//     },
//   },
// };
// const authorAge = toy.author.age;
// const authorRegon = toy.author.location.regon;

//* Деструктуризація це скорочення звертання до ключа(його значення) в об'єкті
//* const {назваКлюча1, назваКлюча2} = назваОб'єкта;

// const { name, author } = toy;

// const product = {
//   name: "tomato",
//   price: 70,
//   photo:
//     "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQvCg9Mub2HqzBhjpq72jMNr0c_jJZ-bmz08GHhCq2GF_ivqIJ",
//   producer: {
//     country: "USA",
//     state: "California",
//     city: "San Jose",
//   },
// };

// const productContry = product.producer.country;
// console.log(productContry);
// const productCity = product.producer.city;
// console.log(productCity);

//* Неглибока деструктуризація
// const { country, state, city } = product.producer;
// console.log(country, state);

//* Глибока деструктуризація
// const { producer } = product;
// console.log(producer);
// Якщо нам треба витянути ключі з нижче вкладеного об'єкта
// const {
//   producer: { country, city },
// } = product;
// console.log(producer); //* Працювати не буде
// console.log(city, country);
//const {назваКлюча = дефолтне значення, назваКлюча: переназивання} = назваОб'єкта
// const { weight = null, name: productName = "without name" } = product;
// console.log(weight, productName);

//const {назваКлюча, через rest збираємо всі інші ключі в обєкт info} = назваОб'єкта
// const { producer, ...info } = product;
// console.log(info);

// const name = "";

// const products = [
//   {
//     title: "milk",
//     price: 250,
//   },
//   {
//     title: "bread",
//     price: 120,
//   },
//   {
//     title: "fish",
//     price: 150,
//   },
// ];
// let [milk, bread, fish] = products;
// milk = { ...milk, country: "Ukraine" };
// console.log(milk);

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};

//Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та
//використовує деструктуризацію для повернення рядка, що містить
//інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і
// мені Вік років".
// const person = {
//   name: "Nelli",
//   surname: "Laroy",
//   age: 25,
// };

// const personInfo = (person) => {
//   const { name, surname, age } = person;
//   return `Мене звати ${name} ${surname} і мені ${age} років`;
// };

// const personInfo = ({ name, surname, age } = person) =>
//   `Мене звати ${name} ${surname} і мені ${age} років`;
// console.log(personInfo(person));

//Напишіть функцію, яка приймає об'єкт, що містить інформацію про
//студента(ім'я, прізвище, оцінки за три предмети) та використовує
//деструктуризацію для повернення середньої оцінки студента.
// const student = {
//   name: "Bruce",
//   surname: "Lee",
//   grades: [4, 5, 3],
// };

// const calculateAverageGrade = ({
//   name,
//   surname,
//   grades: [grade1 = 0, grade2 = 0, grade3 = 0],
// } = student) =>
//   `Student ${name} ${surname} has average mark ${
//     (grade1 + grade2 + grade3) / 3
//   }`;
// console.log(calculateAverageGrade(student));

//Напишіть функцію, яка отримує масив об'єктів з інформацією про товари
//(назва, ціна, кількість) та використовує деструктуризацію для обчислення
//загальної вартості товарів.
const items = [
  { name: "Футболка", price: 250, quantity: 2 },
  { name: "Джинси", price: 800, quantity: 1 },
  { name: "Кросівки", price: 1200, quantity: 1 },
];
const calculateTotalCost = ([
  { price: price1, quantity: quantity1 },
  { price: price2, quantity: quantity2 },
  { price: price3, quantity: quantity3 },
] = items) => price1 * quantity1 + price2 * quantity2 + price3 * quantity3;
console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500

//Напишіть функцію, яка отримує об'єкт зі списком електронних адрес
//(поле "emails") та використовує деструктуризацію для повернення першої
//адреси в цьому списку.
const person = {
  name: "John",
  emails: ["john@gmail.com", "john@example.com", "john123@yahoo.com"],
};
const getFirstEmail = ({ emails: [email] } = person) => email;
console.log(getFirstEmail(person)); // 'john@gmail.com'

//Напишіть функцію, яка отримує об'єкт зі списком користувачів (поле
//"users"), де кожен користувач є об'єктом з полями "ім'я" та "вік",
//та використовує деструктуризацію для повернення списку користувачів,
//які старші за 18 років.
const data = {
  users: [
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Bob", age: 30 },
    { name: "Alice", age: 20 },
  ],
};
const getAdultUsers = ({ users } = data) => {
  const adultUsers = [];
  for (const user of users) {
    if (user.age >= 18) {
      adultUsers.push(user);
    }
  }
  return adultUsers;
};
console.log(getAdultUsers(data));
