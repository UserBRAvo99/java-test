function randomArrNumber() {
    const arr = [];
    for (let i = 1; i <= 10; i += 1) {
        arr.push(Math.round(Math.random() * (100 - 1) + 1));
    }
    return arr;
}

// 1 Створи функцію, яка приймає масив чисел і повертає масив з тими ж числами, але відсортованими в порядку зростання.

// const sortNumber = arr => [...arr.sort((a, b) => a - b)];
// console.log(sortNumber(randomArrNumber()));

// // // розгорнутий варіант
// // {
// //     const newArr = [];
// //     newArr.push(...arr.sort((a, b) => a - b));
// //     return newArr;
// // };

// 2 Створи функцію, яка приймає рядок і повертає новий рядок, у якому перша літера кожного слова замінена на велику.

// const mandarin = 'apple hazelnut avocado banana lemon mandarin peach';

// const firstLetterUpperCase = string => {
//     return string.split(' ').map(word => {
//         return word
//             .split('')
//             .map((e, i) => (i === 0 ? e.toUpperCase() : e))
//             .join('');
//     });
// };

// console.log(firstLetterUpperCase(mandarin));

// 3 Створи функцію, яка приймає масив об'єктів і повертає новий масив, в якому тільки ті об'єкти, властивість "age" яких більше або рівна 18.

// const usersArr = [
//     {
//         name: 'John',
//         age: 12,
//     },
//     {
//         name: 'Tom',
//         age: 16,
//     },
//     {
//         name: 'Karl',
//         age: 20,
//     },
//     {
//         name: 'Jack',
//         age: 34,
//     },
//     {
//         name: 'Bob',
//         age: 18,
//     },
// ];

// const checkAge = users => {
//     const age = [];
//     users.forEach(user => {
//         if (user.age >= 18) {
//             age.push(user);
//         }
//     });
//     return age;
// };

// console.log(checkAge(usersArr));

// 4 Створи функцію, яка приймає масив чисел і повертає середнє арифметичне цих чисел.

// const arithmeticAverage = arrNumber =>
//     arrNumber.reduce((number, prevNumber) => number + prevNumber, 0) / arrNumber.length;

// console.log(`Середнє арифметичне: ${arithmeticAverage(randomArrNumber())}`);

// 5 Створи функцію, яка приймає рядок і повертає новий рядок, у якому всі слова з великої літери записані в оберненому порядку.

const arrWords = ['apple', 'hazelnut', 'avocado', 'banana', 'lemon', 'mandarin', 'peach'];

// const stringWords = 'apple hazelnut avocado banana lemon mandarin peach';

// const reversString = string => {
//     return string
//         .split(' ')
//         .map(word => {
//             return word
//                 .split('')
//                 .reverse()
//                 .map((e, i) => (i === 0 ? e.toUpperCase() : e))
//                 .join('');
//         })
//         .join(' ');
// };

// console.log(reversString(stringWords));

// 6 Створи функцію, яка приймає два аргументи - рядок та символ, і повертає кількість входжень цього символу в рядок.

// const stringWords = 'apple hazelnut avocado banana lemon mandarin peach';
// const symbols = 'e';

// const numberOfCharacters = (string, symbols) => {
//     let sum = 0;
//     string.split('').forEach(letter => (letter === symbols ? (sum += 1) : (sum += 0)));
//     return sum;
// };

// console.log(numberOfCharacters(stringWords, symbols));

// 7 Створи функцію, яка приймає масив чисел та повертає новий масив, який містить лише унікальні числа з вихідного масиву (тобто кожне число в новому масиві зустрічається тільки один раз).

// const arrNumbers = [1, 33, 65, 33, 5, 68, 52];

// const uniqueNumbers = arr => arr.filter((number, index, arr) => arr.indexOf(number) === index);

// console.log(uniqueNumbers(arrNumbers));

// 8 Створи функцію, яка приймає масив об'єктів з властивістю age та повертає середній вік цих об'єктів.

// const usersArr = [
//     {
//         name: 'John',
//         age: 12,
//     },
//     {
//         name: 'Tom',
//         age: 16,
//     },
//     {
//         name: 'Karl',
//         age: 20,
//     },
//     {
//         name: 'Jack',
//         age: 34,
//     },
//     {
//         name: 'Bob',
//         age: 18,
//     },
// ];

// const middleAge = users => {
//     let sum = 0;
//     users.forEach(({ age }) => (sum += age));
//     return sum / users.length;
// };

// console.log(middleAge(usersArr));

// 9 Створи функцію, яка приймає масив об'єктів з властивістю price та повертає найбільшу ціну з цих об'єктів.

// const productsArr = [
//     {
//         name: 'gold',
//         price: 1500,
//     },
//     {
//         name: 'silver',
//         price: 1200,
//     },
//     {
//         name: 'mithril',
//         price: 2500,
//     },
//     {
//         name: 'metal',
//         price: 500,
//     },
//     {
//         name: 'ore',
//         price: 100,
//     },
// ];

// const highestPrice = products => {
//     let totalPrice = products[0].price;
//     products.map(({ price }) => {
//         if (totalPrice < price) {
//             totalPrice = price;
//         }
//     });
//     return totalPrice;
// };

// console.log(highestPrice(productsArr));

// 10 Створи функцію, яка приймає масив об'єктів з властивістю name та повертає новий масив, який містить тільки ті об'єкти, в яких ім'я починається з певної літери.

// const usersArr = [
//     {
//         name: 'John',
//         age: 12,
//     },
//     {
//         name: 'Tom',
//         age: 16,
//     },
//     {
//         name: 'Karl',
//         age: 20,
//     },
//     {
//         name: 'Jack',
//         age: 34,
//     },
//     {
//         name: 'Bob',
//         age: 18,
//     },
// ];

// const firstLetterName = 'T';

// const searchNameUser = (users, letter) =>
//     users.filter(user => user.name[0].toLowerCase() === letter.toLowerCase());

// console.log(searchNameUser(usersArr, firstLetterName));

// 11 Створи функцію, яка приймає масив чисел та повертає новий масив, в якому кожен елемент є квадратом відповідного елемента вхідного масиву.

// const arrNumbers = [1, 33, 65, 33, 5, 68, 52];

// const squareOfNumber = arr => arr.map(number => Math.pow(number, 2));

// console.log(squareOfNumber(arrNumbers));

// 12 Створи функцію, яка приймає рядок та повертає новий рядок, в якому кожна літера перетворена на відповідну їй цифру в ASCII таблиці charCodeAt()

// const stringWords = 'apple hazelnut avocado banana lemon mandarin peach';

// const transformationString = string => {
//     let total = '';
//     string.split('').forEach(symbol => {
//         if (symbol === ' ') {
//             total += ' ';
//         }
//         total += symbol.charCodeAt().toString();
//     });
//     return total;
// };

// console.log(transformationString(stringWords));
