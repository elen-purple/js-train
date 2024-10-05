const typeOfSubscription = prompt("Введіть тип підписки").toLowerCase();
let cost;

if (typeOfSubscription === "standart".toLowerCase()) {
  cost = 50;
  alert(`Ціна підписки ${cost}`);
} else if (typeOfSubscription === "regular".toLowerCase()) {
  cost = 25;
  alert(`Ціна підписки ${cost}`);
} else if (typeOfSubscription === "vip".toLowerCase()) {
  cost = 100;
  alert(`Ціна підписки ${cost}`);
} else {
  alert("Вибачте, ви не наш клієнт. Оберіть інший тип підписки");
}

switch (typeOfSubscription) {
  case "standart".toLowerCase():
    cost = 50;
    break;
  case "regular".toLowerCase():
    cost = 25;
    break;
  case "vip".toLowerCase():
    cost = 100;
    break;
  default:
    alert("Вибачте, ви не наш клієнт. Оберіть інший тип підписки");
}
alert(`Ціна підписки ${cost}`);

// switch ("Що порівнюємо") {
//  case "з чим порівнюємо":
//      якщо case true то робимо інструкцію;
//  break;
//
//  case "з чим порівнюємо":
//      якщо case true то робимо інструкцію;
//  break;
//
//  case "з чим порівнюємо":
//      якщо case true то робимо інструкцію;
//  break;
//
//  default:
//      виконується ця інструкція якщо всі case false;
// }

const message1 =
  typeOfSubscription === "standart".toLowerCase()
    ? ((cost = 50), alert(`Ціна підписки ${cost}`))
    : typeOfSubscription === "regular".toLowerCase()
    ? ((cost = 20), alert(`Ціна підписки ${cost}`))
    : typeOfSubscription === "vip".toLowerCase()
    ? ((cost = 100), alert(`Ціна підписки ${cost}`))
    : (cost = null);
alert(`Ціна підписки ${cost}`);

const message = prompt("Яка “офіційна” назва JavaScript?").toLowerCase;

if (message === "ECMAScript".toLowerCase) {
  alert("Правильно!");
} else {
  alert("Ви не знаєте? ECMAScript!");
}

alert(
  message === "ECMAScript".toLowerCase
    ? "Правильно!"
    : "Ви не знаєте? ECMAScript!"
);

const totalSpent = parseInt(prompt("Ваша загальна сума витрачених коштів"));
const payment = parseInt(prompt("Скільки ви витратили зараз"));
const discount =
  totalSpent > 100 && totalSpent < 1000
    ? 2
    : totalSpent > 1000 && totalSpent < 5000
    ? 5
    : totalSpent > 5000
    ? 10
    : 0;
alert(
  discount === 2
    ? `Бронзовий партнер, знижка ${discount}%`
    : discount === 5
    ? `Срібний партнер, знижка ${discount}%`
    : discount === 10
    ? `Золотий партнер, знижка ${discount}%`
    : "У вас ще немає партнерської знижки"
);
alert(`Оформляемо замовлення на суму ${payment} зі знижкою ${discount}%`);
alert(`До сплати ${payment - (payment / 100) * discount}`);
const creditCard = parseInt(prompt("Введіть номер банківскої карти"));
