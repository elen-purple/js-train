const b = 8;
const c = 31;
// const d = 12;
const addition = a + b;
const subtraction = a - b;
const multiplication = a * b;
const division = a / b;
// const remainder = a % b;
// console.log(addition);
// console.log(subtraction);
// console.log(multiplication);
// console.log(division);
// console.log(remainder);

// 17 / 9 = 1.(8) вийшло неціле число, давайте шукати далі
// 16 / 8 = 1.(77) виявилося нецілим числом, шукаємо далі
// 15 / 7 = 1.(66) виявилося нецілим числом, шукаємо далі
// 9 / 9 = 1 вийшло цілим числом, потім підраховуємо залишок відняти від 17 найближче число, яке ділиться на 9,
// тобто 17 - 9 = 8 – залишок від ділення
// 25 / 7 = 3,1 виявилося нецілим числом, шукаємо далі
// 24 / 7 = 3,4 виявилося нецілим числом, шукаємо далі
// 23 / 7 = неціле число, давайте шукати далі
// 22 / 7 = отримано неціле число, шукаємо далі
// 22 / 7 = вийшло неціле число, шукаємо далі
// 21 / 7 = вийшло ціле число
// тобто 25 - 21 = 4 – залишок від ділення

///////////////////////////////////////////

const d = 5;

let add = 0;
// add = add + d;
add += d;
console.log(add);

let sub = 11;
// sub = sub - d;
sub -= d;
console.log(sub);

let multiply = 11;
// multiply = multiply * d;
multiply *= d;
console.log(multiply);

let divide = 61;
// divide = divide / d;
divide /= d;
console.log(divide);

let remainder = 17;
// remainder = remainder % d;
remainder %= d;
console.log(remainder);

//////////////////////////////////////

let salary = 1000;
console.log(salary);

salary = 2000;
console.log(salary);

// salary = salary + 3000;
salary += 3000;
console.log(salary);

// salary -= 500;
salary = salary - 500;
console.log(salary);

///////////////////////////////////////

const num1 = 15;
const num2 = 82;

// console.log(num1 == num2);
console.log(true == true);

// фолси значання
console.log(num1 > num2); // більше
console.log(num1 < num2); // менше
console.log(num1 <= num2); // менше або дорівнює
console.log(num1 >= num2); // більше або дорівнює
console.log(num1 == num2); // дорівнює
console.log(num1 === num2); // суворо дорівнює
console.log(num1 != num2); // не дорівнює
console.log(num1 !== num2); // суворо не дорівнює

// false значення це число 0, NaN, undefined, null, "", false

// console.log(false == "");
// console.log(0 == null);

// НЕ строгим порівнянням ми не хочем користуватись (==)
// Ми ЗАВЖДИ порівнюємо через строге дорівнює  (===)

console.log(0 === "");
console.log(0 !== "");

console.log(0 == "");
console.log(0 != "");

// const a = prompt("Type const a");
// const b = prompt("Type const b");
// const sum = a + b;
// alert(sum);
// const deduction = a - b;
// alert(deduction);
// const multiplication = a * b;
// alert(multiplication);
// const division = a / b;
// alert(division);
// const remainderFromDivision = a % b;
// alert(remainderFromDivision);

const salery = 1000;
