const numbers = [1, 2, 3];
console.log(numbers);
console.log(...numbers);
//* допамагає витягнути елементи з масив і зробити не масивом

let a = 5;
console.log(a);
let b = a;
console.log(b);
a = 7;
console.log(a);
console.log(b);

const c = [1, 2, 3, 4];
console.log(c);
const d = c;
console.log(d);
c.push(5);
console.log(c);
console.log(d);

const e = [1, 2, 3, 4];
console.log(e);
const f = [...e];
console.log(f);
e.push(5);
console.log(e);
console.log(f);

function countNumbers(a, b, c) {
  return a + b + c;
}
const result = [1, 2, 3];
console.log(countNumbers(...result));

const user = {
  name: "Bill",
  tel: "+309 5059 49 393",
};
const copyUser = { ...user, password: "aaassseeefff" };
const user2 = {
  city: "Loli",
  email: "anan.alais@gmail.com",
};
const totalUser = { ...user, ...user2 };
console.log(totalUser);

//Присвоєння за посиланням

// let a = 44;
// const b = a;

//У змінну b записалася копія значення змінної a (44)

// console.log(a === b);

// a = 100;

//У змінну a поставили значення 100, але в b значення не міняли і там
//залишилась сьара копія a(44)

// console.log(a === b);

// const basket = {
//   product: "apple",
// };
// const basket2 = basket;

//Ми поставили basket у basket2 і у basket2 поставилась не копія basket,
//а передалась посилання на оригінальний об'єкт

// console.log("перший кошик", basket, "другий кошик", basket2);

// basket2.fruit = "kiwi";
// console.log("перший кошик", basket, "другий кошик", basket2);

const basket = {
  product: "apple",
};
const basket2 = { ...basket };

//Ми висипали у basket2 через операцію spread, створюючи копію об`єкта basket

console.log("перший кошик", basket, "другий кошик", basket2);

basket2.fruit = "kiwi";
console.log("перший кошик", basket, "другий кошик", basket2);

const userLocation = {
  location: "Kyiv",
};
const userData = {
  hobby: "Crocheting",
  location: "Lviv",
};

const myUser = { ...userLocation, ...userData };
console.log(myUser);
