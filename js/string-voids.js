// console.dir(String);
const myName = "Anna";
console.log(myName);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName);
const letter = "A";
console.log(
  `In my name ${myName} sybole ${letter} has index ${myName.indexOf(letter)}`
);
console.log(`My name ${myName} includes ${letter}: ${myName.includes(letter)}`);

const message = " Привіт, я принц Абдула, це не спам, пропоную тобі мільйон! ";
console.log(message.startsWith(" Привіт, я принц Абдула"));
console.log(message.endsWith("пропоную тобі мільйон "));
console.log(message.length);
message;
console.log(message.trim());

console.log(message.padStart(72, "lalala"));
console.log(message.padEnd(62, "Na"));
console.log("Це тестовий рядочок".padEnd(40, "!"));

console.log("Це тестовий рядочок".slice(3, 11));

console.log(message.charAt(58));

console.log(myName.replace("A", "@"));

const javascript = "JavaScript";
console.log(javascript.substring(0, 4));
console.log(javascript.slice(0, 4));
