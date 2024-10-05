// * Розгалуження - if
// * Одинарне розгалуження if
// * Подвійне розгалуження if...else

const age = parseInt(prompt("Скільки вам років?"));
if (age < 18) {
  alert(`Ви неповнолітня особа. Вам ${age} років`);
} else {
  alert(`Ви повнолітня особа. Вам ${age} років`);
}

// * Потрійне розгалуження else...if

const salary = Number.parseInt(prompt("Ваша зарплата"));
if (salary <= 10000) {
  alert(`Ваша зарплата низька і складає ${salary} грн`);
} else if (salary > 10000 || salary < 20000) {
  alert(`Ваша зарплата середня і складає ${salary} грн`);
} else if (salary >= 20000) {
  alert(`Ваша зарплата висока і складає ${salary} грн`);
} else if (salary === NaN) {
  alert("Ви вели не корректні данні");
}

// * Тернарний оператор
const message =
  age < 18
    ? `Ви неповнолітня особа. Вам ${age} років`
    : `Ви повнолітня особа. Вам ${age} років`;
console.log(message);
