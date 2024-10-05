console.dir(Number);

let tesNumber = "10";
console.log(tesNumber);
tesNumber = Number(tesNumber);
console.log(tesNumber);
console.log(Number("tesNumber"));
console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));

const elementWidth = "100.6px";
console.log(Number(parseInt(elementWidth)));
console.log(Number(parseFloat(elementWidth)));
