//Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти

//Написати функцію яка буде повертати масив всіх імен друзів

//Написати функцію яка буде повертати масив імен друзів які онлайн

//Написати функцію яка буде повертати масив імен друзів які офлайн

//Написати функцію яка буде повертати об’єкт масивів  імен друзів які
//офлайн та онлайн.Створити 2 масива онлайн і офлайн, якщо тру - в перший,
//якщо ні - в другий

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

const findFriendByName = (friends, name) => {
  let message = "There isn't such friend";
  for (const friend of friends) {
    const { name: friendName } = friend;
    if (friendName === name) {
      message = "There is such friend";
    }
  }
  return message;
};
console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy"));

const getAllNames = (friends) => {
  const namesOfFriends = [];
  for (const friend of friends) {
    const { name } = friend;
    namesOfFriends.push(name);
  }
  return namesOfFriends;
};
console.log(getAllNames(friends));

const getOnlineFriends = (friends) => {
  const onlineFriends = [];
  for (const friend of friends) {
    const { name, online } = friend;
    if (online === true) {
      onlineFriends.push(name);
    }
  }
  return onlineFriends;
};
console.log(getOnlineFriends(friends));

const getOfflineFriends = (friends) => {
  const onlineFriends = [];
  for (const friend of friends) {
    const { name, online } = friend;
    if (online !== true) {
      onlineFriends.push(name);
    }
  }
  return onlineFriends;
};
console.log(getOfflineFriends(friends));

const getFriendsByStatus = (friends) => {
  const friendByStat = {
    onlineFriends: [],
    offlineFriends: [],
  };
  const { onlineFriends, offlineFriends } = friendByStat;
  for (const friend of friends) {
    const { name, online } = friend;
    if (online === true) {
      onlineFriends.push(name);
    } else {
      offlineFriends.push(name);
    }
  }
  return friendByStat;
};

console.log(getFriendsByStatus(friends));

// * Homework
// Припустимо, є два масиви об'єктів, в яких повторюються певні властивості;:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти
//з обох масивів, але без дублів.

const child1 = {
  name: "Teia",
  surname: "Bold",
  age: 11,
  toys: [
    {
      name: "Ball",
      age: 7,
    },
    {
      name: "Phone",
      age: 4,
    },
    {
      name: "Album",
      age: 5,
    },
    {
      name: "Doll",
      age: 8,
    },
  ],
};

const child2 = {
  name: "Jimmy",
  surname: "Bold",
  age: 8,
  toys: [
    {
      name: "Transformer",
      age: 4,
    },
    {
      name: "Car",
      age: 6,
    },
    {
      name: "Album",
      age: 5,
    },
    {
      name: "Ball",
      age: 7,
    },
  ],
};

const child3 = {
  name: "Ron",
  surname: "Bold",
  age: 4,
  toys: [
    {
      name: "Xylophone",
      age: 1,
    },
    {
      name: "Ball",
      age: 7,
    },
  ],
};
xylophone;

const collectAllToys = (...childs) => {
  const allToys = [...childs[0].toys];
  if (childs.length > 1) {
    for (let i = 1; i < childs.length; i += 1) {
      const { toys: childToys } = childs[i];
      for (const childToy of childToys) {
        let isToy = false;
        const { name: childToyName } = childToy;
        for (const toy of allToys) {
          const { name } = toy;
          if (name === childToyName) {
            isToy = true;
            break;
          }
        }
        if (!isToy) {
          allToys.push(childToy);
        }
      }
    }
  }
  return allToys;
};

console.log(collectAllToys(child1, child2, child3));
