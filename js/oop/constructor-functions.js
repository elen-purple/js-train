//* Функції конструктори - це шаблони, за якими ми
//* можемо створбвати модель(шаблон), а на базі моделі
//* створюємо екземпляр

// const Car = function (model, price, color) {
//   this.model = model;
//   this.price = price;
//   this.color = color;
// };
// const bmw = new Car("BMW", "1000$", "black");
// console.log(bmw);
// const toyota = new Car("TOYOTA", "2000$", "red");
// console.log(toyota);

//* Об'єкт параметрів - це коли ми агументи передаємо\
//* у вигляді об'єкта

const Car = function ({ model, price, color } = data) {
  this.model = model;
  this.price = price;
  this.color = color;
};
const dataBmw = {
  model: "BMW",
  price: "1000$",
  color: "black",
};
const dataToyota = {
  model: "TOYOTA",
  price: "2000$",
  color: "red",
};
const bmw = new Car(dataBmw);
console.log(bmw);
const toyota = new Car(dataToyota);
console.log(toyota);
