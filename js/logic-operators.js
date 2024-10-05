console.dir(Boolean);

console.log(Boolean(0));
console.log(Boolean(1));

const message = "Fazan";
console.log(Number(message));
console.log(Boolean(message));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(0));

// Логічний оператор і - &&
// Повертає останнє true або перше false
console.log("Логічний оператор і - &&");
console.log(5 && "99" && 0);
console.log(1 && null && undefined);
console.log("" && true && 40);

// Логічний оператор або - ||
// Зупиняється на першому true або на останняму false
console.log("Логічний оператор або - ||");
console.log(5 || "99" || 0);
console.log(0 || null || undefined);
console.log("" || false || 40);

//Логічний оператор НЕ - !
console.log("Логічний оператор НЕ - !");
console.log(!true);
console.log(!12);
console.log(!"b");
console.log(!0);
console.log(!"");
console.log(!undefined);
console.log(!false);
console.log(!null);
console.log(!NaN);

console.log(("55" && 0) || 2);
console.log(2 || ("55" && 0));
console.log(!2 || ("55" && 0));

const x1 = 10;
const x2 = 30;
const number = 45;
console.log("Задача");
console.log(number < x1);
console.log(number > x1);
console.log(number > x1 && number < x2);
console.log(number < x1 || number > x2);

const isOnline = false;
const isFriend = true;
const isDnd = false;

console.log(
  `Чи ми можем розпочати чат користувачем: ${isOnline && isFriend && !isDnd}`
);
