const flower = {
  plant: true,
  isAlive: true,
  owner: "Anna",
};
console.log(flower);
const rose = Object.create(flower);
console.log(rose);
rose.color = "red";
console.log(rose);

const daisy = Object.create(flower);
daisy.color = "white";
console.log(daisy);
daisy.isAlive = false;

const yellowRose = Object.create(flower);
yellowRose.color = "yellow";
console.log(yellowRose);

const yellowRose1 = Object.create(yellowRose);
yellowRose1.name = "Anatoliy";
console.log(yellowRose1);
const yellowRose2 = Object.create(yellowRose);
yellowRose2.name = "Vasyliy";
console.log(yellowRose2);
