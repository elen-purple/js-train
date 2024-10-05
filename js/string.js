const subject = "JavaScript";
const sentence = "is my favorite subject!";
const message = subject + " " + sentence;
console.log(message);
//Це називається конкатинація або зшивання рядків

const firstLetter = message[0];
console.log(firstLetter);
const messLength = message.length;
console.log(messLength);
const lastLetter = message[messLength - 1];
console.log(lastLetter);
const friendName = null;
const childName = undefined;
console.log(message + " " + friendName);
console.log(message + " " + childName);

const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const anotherResult = "5" + 5 + 5;
console.log(anotherResult);
console.log(typeof anotherResult);

const question = confirm("Is" + " " + subject + " " + "your favorite subject?");
if (question === true) {
  alert("Very good!");
} else {
  alert("Very bad!");
}

//Шаблоні рядки

const myAge = 13;
const info = `Мені ${myAge} років`;
console.log(info);
//Знак долора і фігурні дужки це інтерполяція

alert("Добрий день. Ви завітали до нащого готелю!");
const visitorName = prompt("Впишіть ваше ім'я");
const visitorSurname = prompt("Впишіть ваше призвіще");
const roomType = prompt("Впишіть тип бажаного номера");
const roomNumber = prompt("Впишіть бажаний номер");
const visitorMessage = `Гість ${visitorName} ${visitorSurname} поселяється в ${roomType} номер ${roomNumber}`;
console.log(visitorMessage);

const myName = prompt("Впишіть ваше ім'я");
const mySurame = prompt("Впишіть ваше призвіще");
const myFullName = `${myName} ${mySurame}`;
const myNameLength = myFullName.length;
console.log(`Довжина рядка ${myNameLength}`);

const rectangleHeight = Number.parseFloat(
  prompt("Впишіть висоту прямокутника")
);
const rectangleWidth = Number.parseFloat(prompt("Впишіть ширину прямокутника"));
const rectangeArea = rectangleHeight * rectangleWidth;
console.log(
  `Площа прямокутника з висотою ${rectangleHeight}см і шириною ${rectangleWidth}см дорівнює ${rectangeArea} квадратних сантиметрів`
);
