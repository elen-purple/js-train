// const playList = {
//   title: "Songs",
//   songs: [
//     {
//       name: "Last Christmas",
//       author: "Wham!",
//     },
//     {
//       name: "Let It Snow!",
//       author: "Frank Sinatra",
//     },
//     {
//       name: "All I Want For Christmas Is You",
//       author: "Mariah Carey",
//     },
//     {
//       name: "Jingle Bells Rock",
//       author: "Bobby Helms",
//     },
//     {
//       name: " I Wish You A Merry Christmas",
//       author: "Bing Crosby",
//     },
//   ],
//   countOfSongs() {
//     return this.songs.length;
//   },
//   addSong() {
//     this.songs.push({
//       name: prompt("Enter name of new song"),
//       author: prompt("Enter author of new song"),
//     });
//     return this.songs;
//   },
// };

// console.log(playList.countOfSongs());
// console.log(playList.songs[1].author);
// console.log(playList.songs[2].name);
// console.log(playList.addSong());

// const user = {
//   name: "Anna",
// };
// user.age = 15;
// console.log(user);

// const age = 15;
// const user = {
//     name: "Anna",
//     age: age,
// };
// console.log(user);
//* Якщо назва властивості співпадає з назваю змінної то можна скоротити
// const age = 15;
// const user = {
//   name: "Anna",
//   age,
// };
// console.log(user);

//Створіть масив об'єктів "students", де кожен об'єкт
//буде містити властивості "name", "age", "gender" та
//"grade".Напишіть функцію, яка приймає масив об'єктів
//"students" і повертає середній бал групи.

// const students = [
//   {
//     name: "Anna",
//     age: 13,
//     genter: "F",
//     grade: 100,
//   },
//   {
//     name: "Mary",
//     age: 15,
//     genter: "F",
//     grade: 20,
//   },
//   {
//     name: "Mathey",
//     age: 12,
//     genter: "M",
//     grade: 50,
//   },
// ];

// const countAverageGrade = (students) => {
//   let sum = 0;
//   for (const student of students) {
//     sum += student.grade;
//   }
//   return sum / students.length;
// };

// console.log(countAverageGrade(students));

//Створіть об’єкт "сar", який буде мати властивості
//"brand", "model", "year" та "color".Додайте метод,
//який буде виводити на екран повідомлення про
//автомобіль зі значеннями всіх властивостей.
// const car = {
//   brand: "Mercedes",
//   model: "Mayback",
//   year: 2021,
//   color: "red",
//   colsoleParametresOfCar() {
//     console.log(`There are all about your car:`);
//     console.log(`Brand: ${this.brand}`);
//     console.log(`Model: ${this.model}`);
//     console.log(`Year: ${this.year}`);
//     console.log(`Color: ${this.color}`);
//     return;
//   },
// };

// car.colsoleParametresOfCar();

// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// const basket = {
//   fruits: [
//     { name: "🍎", price: 50 },
//     { name: "🍇", price: 70 },
//     { name: "🍋", price: 60 },
//     { name: "🍓", price: 110 },
//   ],
//   addFruit(nameOfFruit, priceOfFruit) {
//     this.fruits.push({ name: nameOfFruit, price: priceOfFruit });
//     return `The fruit ${nameOfFruit} was added`;
//   },
//   deleteFruit(nameOfFruit) {
//     let message = "This fruit doesn't exist";
//     for (let i = 0; i < this.fruits.length; i += 1) {
//       if (this.fruits[i].name === nameOfFruit) {
//         this.fruits.splice(i, 1);
//         message = `The fruit ${nameOfFruit} was deleted`;
//         break;
//       }
//     }
//     return message;
//   },
//   editFruit(nameOfFruit, name, price) {
//     let message = "This fruit doesn't exist";
//     for (let i = 0; i < this.fruits.length; i += 1) {
//       if (this.fruits[i].name === nameOfFruit) {
//         this.fruits.splice(i, 1, { name, price });
//         message = `The fruit ${nameOfFruit} was edited to ${name}`;
//         break;
//       }
//     }
//     return message;
//   },
//   editFruitPrice(nameOfFruit, newFruitPrice) {
//     let message = "This fruit doesn't exist";
//     for (let i = 0; i < this.fruits.length; i += 1) {
//       if (this.fruits[i].name === nameOfFruit) {
//         this.fruits[i].price = newFruitPrice;
//         message = `The price of ${nameOfFruit} was edited to ${newFruitPrice}`;
//         break;
//       }
//     }
//     return message;
//   },
// };

// console.log(basket.deleteFruit("🍋"));
// console.log(basket.addFruit("🍑", 130));
// console.log(basket.editFruit("🍇", "🍒", 160));
// console.log(basket.editFruitPrice("🍎", 60));
// console.log(basket.fruits);

//Створіть масив об'єктів "movies", де кожен об'єкт буде містити властивості
//"title", "director", "year" та "genre".Напишіть функцію, яка приймає
//масив об'єктів "movies" та жанр (строку) як параметри, та повертає масив
//фільмів, які належать до цього жанру.

const movies = [
  {
    title: "Laila",
    director: "Rober Owl",
    year: 2025,
    genre: "Comedi",
  },
  {
    title: "Mama",
    director: "Viliam Makgonegl",
    year: 1945,
    genre: "Historic Film",
  },
  {
    title: "Vangog",
    director: "Alberto Prusaci",
    year: 1894,
    genre: "Historic Film",
  },
];
const findMoviesByGenre = (movies, genre) => {
  const moviesWithOurGenre = [];
  for (const movie of movies) {
    if (movie.genre === genre) {
      moviesWithOurGenre.push(movie);
    }
  }
  return moviesWithOurGenre;
};

console.log(findMoviesByGenre(movies, "Historic Film"));

const myFriends = {
  friends: [
    {
      name: "Neyla",
      isOnline: true,
    },
    {
      name: "Kala",
      isOnline: false,
    },
    {
      name: "Viktor",
      isOnline: true,
    },
    {
      name: "Park",
      isOnline: false,
    },
    {
      name: "Victory",
      isOnline: true,
    },
  ],
  findFriendByName(name) {
    let message = "This friend doesn't exist";
    for (const friend of this.friends) {
      if (friend.name === name) {
        message = `The friend ${name} was found`;
      }
    }
    return message;
  },
  getAllNames() {
    let message = "";
    for (const friend of this.friends) {
      message += friend.name + ", ";
    }
    return message;
  },
  getOnlineFriends() {
    let message = "";
    for (const friend of this.friends) {
      if (friend.isOnline === true) {
        message += friend.name + ", ";
      }
    }
    return message;
  },
  getOfflineFriends() {
    let message = "";
    for (const friend of this.friends) {
      if (friend.isOnline === false) {
        message += friend.name + ", ";
      }
    }
    return message;
  },
  getFriendsByStatus() {
    const onlineFriends = [];
    const offlineFriends = [];
    for (const friend of this.friends) {
      if (friend.isOnline === true) {
        onlineFriends.push(friend);
      } else {
        offlineFriends.push(friend);
      }
    }
    const statusFriends = {
      onlineFriends,
      offlineFriends,
    };
    return statusFriends;
  },
};
console.log(myFriends.findFriendByName("Victory"));
console.log(myFriends.getAllNames());
console.log(myFriends.getOnlineFriends());
console.log(myFriends.getOfflineFriends());
console.log(myFriends.getFriendsByStatus());
