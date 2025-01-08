class Hero {
  constructor({ name, health, points, weapon, skin, size }) {
    this.name = name;
    this.health = health;
    this.points = points;
    this.weapon = weapon;
    this.skin = skin;
    this.size = size;
  }
  showHeroInfo() {
    console.log(
      `A hero ${this.name} has ${this.points} points, ${this.weapon} and ${this.health} health`
    );
  }
}

class Ork extends Hero {
  constructor({ name, health, points = 0, weapon, skin, size, iq }) {
    super({ name, health, points, weapon, skin, size });
    this.iq = iq;
  }
}

const orkBilly = new Ork({
  name: "Billy",
  health: 100,
  points: 0,
  weapon: "sword",
  skin: "green",
  iq: 0,
  size: 100,
});

const orkVilly = new Ork({
  name: "Villy",
  health: 100,
  points: 0,
  weapon: "mace",
  skin: "yellow-brown",
  iq: 0,
  size: 80,
});

const orkDilly = new Ork({
  name: "Dilly",
  health: 100,
  points: 0,
  weapon: "axe",
  skin: "brown",
  iq: 0,
  size: 110,
});

class Elf extends Hero {
  constructor({
    name,
    health,
    points = 0,
    weapon,
    skin,
    size,
    hair,
    age,
    eyes,
  }) {
    super({ name, health, points, weapon, skin, size });
    this.hair = hair;
    this.age = age;
    this.eyes = eyes;
  }
}

const elfRose = new Elf({
  name: "Rose",
  health: 80,
  points: 0,
  weapon: "bow",
  skin: "sky-blue",
  size: 180,
  hair: "white",
  age: 200,
  eyes: "blue",
});

//запускаємо гру

orkVilly.showHeroInfo();
