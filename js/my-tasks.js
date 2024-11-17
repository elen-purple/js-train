//* 1
//Додає нову оцінку за предмет за допомогою методу масиву.
//Виводить повідомлення, чи перевищує середня оцінка студента заданий поріг, використовуючи if...else.

// const student = {
//   firstName: "Іван",
//   lastName: "Петренко",
//   age: 14,
//   subjects: [
//     {
//       name: "Алгебра",
//       grades: [5, 8, 7, 6, 9, 7, 8, 10, 5, 9],
//     },
//     {
//       name: "Зарубіжна література",
//       grades: [7, 6, 8, 9, 8, 7, 6, 7, 9, 8],
//     },
//     {
//       name: "Українська література",
//       grades: [9, 8, 7, 8, 9, 10, 9, 7, 8, 9],
//     },
//     {
//       name: "Українська мова",
//       grades: [10, 9, 8, 9, 7, 8, 9, 8, 7, 10],
//     },
//     {
//       name: "Англійська мова",
//       grades: [7, 8, 9, 6, 7, 8, 7, 6, 9, 8],
//     },
//     {
//       name: "Географія",
//       grades: [8, 9, 8, 10, 7, 6, 8, 9, 7, 8],
//     },
//     {
//       name: "Геометрія",
//       grades: [6, 7, 9, 8, 7, 8, 9, 10, 8, 7],
//     },
//     {
//       name: "Мистецтво",
//       grades: [8, 7, 9, 10, 8, 7, 9, 8, 7, 10],
//     },
//     {
//       name: "Фізика",
//       grades: [7, 8, 7, 6, 9, 10, 8, 9, 7, 6],
//     },
//     {
//       name: "Фізична культура",
//       grades: [10, 10, 9, 8, 9, 7, 8, 9, 10, 10],
//     },
//     {
//       name: "Історія України",
//       grades: [8, 7, 9, 8, 7, 10, 9, 8, 9, 7],
//     },
//     {
//       name: "Всесвітня історія",
//       grades: [7, 6, 8, 9, 7, 8, 7, 9, 8, 6],
//     },
//     {
//       name: "Біологія",
//       grades: [9, 8, 7, 8, 9, 8, 9, 7, 8, 9],
//     },
//     {
//       name: "Інформатика",
//       grades: [10, 9, 8, 9, 8, 7, 10, 8, 9, 8],
//     },
//     {
//       name: "Хімія",
//       grades: [7, 8, 9, 6, 8, 9, 8, 7, 10, 8],
//     },
//     {
//       name: "Трудове навчання",
//       grades: [9, 8, 10, 9, 8, 10, 9, 8, 10, 9],
//     },
//     {
//       name: "Французька мова",
//       grades: [8, 9, 7, 6, 8, 9, 8, 7, 9, 8],
//     },
//   ],
//   showStudentAveregeMarks() {
//     for (const subject of this.subjects) {
//       const { name, grades } = subject;
//       let sum = 0;
//       for (const grade of grades) {
//         sum += grade;
//       }
//       console.log(
//         `Середня оцінка з предмету ${name}: ${Math.round(sum / grades.length)}`
//       );
//     }
//   },
//   addMark() {},
// };
// student.showStudentAveregeMarks();

//* 2
//TODO масив користувачів методи реєстрація і вхід
const app = {
  users: [
    {
      nickname: "Penny_Red",
      email: "penny_red@gmail.com",
      password: "PeNnY_ReD",
      gender: "F",
      date: 2011,
      favoriteGames: [
        {
          name: "World of words",
          year: 2010,
          genre: "Puzzles",
        },
        {
          name: "Minecraft",
          year: 2011,
          genre: "Io",
        },
        {
          name: "Roblox",
          year: 2013,
          genre: "Io",
        },
      ],
    },
    {
      nickname: "Jaky_Worner",
      email: "jaky_worner@gmail.com",
      password: "JaKy_WoRnEr",
      gender: "M",
      date: 2015,
      favoriteGames: [
        {
          name: "World of words",
          year: 2010,
          genre: "Puzzles",
        },
        {
          name: "Minecraft",
          year: 2011,
          genre: "Io",
        },
        {
          name: "Roblox",
          year: 2013,
          genre: "Io",
        },
      ],
    },
  ],
  checkUser(enterSring, userString) {
    return enterSring === userString;
  },
  register() {
    const userNickname = prompt("Enter your nickname");
    const userEmail = prompt("Enter your email");
    const userPassword = prompt("Enter your password");
    const userCheckPassword = prompt("Enter your password again");
  },
};
