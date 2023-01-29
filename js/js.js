// "use strict";
// const money = Number(prompt('Введи скільки в тебе грн',));
// console.log( money )
// const candy = Number(prompt('Ціна цукерки 25грн. Введи скільки цукерок ти хочеш купити',))
// console.log( candy )
// const candyPrise = 25;
// const total = (money - (candy * candyPrise));
// console.log(total)

// const first = Number(prompt('Введи перше значення',));
// const second = Number(prompt('Введи друге значення',));
// const action = prompt('Введи дію',);
// console.log(first, action, second);

// const bananСonnection = Number(prompt('Скільки зв`язок бананів',));
// console.log(`У нас є ${bananСonnection} звязки бананів`)
// const bananPieces = Number(prompt('Скільки бананів в зв`язці',));
// console.log(`У нас є ${bananСonnection} звязки бананів по ${bananPieces} штук.`)
// const strawberries = Number(prompt('Скільки полуничок',));
// console.log(`Полуничок ${strawberries}шт.`)
// const bananMore = bananСonnection * bananPieces;
// console.log(`Всьго бананів ${bananMore} шт.`)
// const strawberriesMore = strawberries - bananMore;
// console.log(strawberriesMore)
// const total = `У нас є ${bananСonnection} звязки бананів по ${bananPieces} штуки. Всьго бананів ${bananMore} шт. Полуничок більше ніж бананів на ${strawberriesMore} шт`;
// console.log(total)

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery ( ${deliveryFee} credits) is incuded in total price.`
// console.log(message)

// ЛІЧИЛЬНИК
// let counter = 0;

// while (counter <= 20) {
//     console.log("counter: ", counter);
//     counter += 1;
// }

// FOR

// const target = 4;
// let sum = 0;

// for (let i = 0; i <= target; i += 2) {
//     sum += i;
// }
// console.log(sum);

// for (let i = 0; i <= 100; i += 5) {
//     console.log(i);
// }

// Задача
// const minSalary = 500;
// const maxSalary = 5000;
// const emploees = 5;
// let totalSalary = 0;

// for (let i = 1; i <= emploees; i = i + 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Зарплата робітника - ${i} - ${salary}`)
//     totalSalary = totalSalary + salary;
// }
// console.log(`Фонд зарплат складає - ${totalSalary}`)

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//     console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//     console.log(character);
// }

// function getExtremeElements(array) {
//   // Change code below this line
//   let arrayFirst = [array[0], array[array.length - 1]];

//   console.log(arrayFirst)

//   // Change code above this line
// }
// getExtremeElements([1, 2, 3, 4, 5])
// // повертає[1, 5]
// getExtremeElements(["Earth", "Mars", "Venus"])
// // повертає["Earth", "Venus"]
// getExtremeElements(["apple", "peach", "pear", "banana"])
// // повертає["apple", "banana"]

// Задача 11
// function calculateEngravingPrice(message, pricePerWord) {
//   let words;
//   // Change code below this line
//   words = message.split(" ");

//   return words.length * pricePerWord;
//   // console.log(pricePerWord)
//   // Change code above this line
//   // return words;
// }
// calculateEngravingPrice("JavaScript is in my blood", 10)
// // повертає 50
// calculateEngravingPrice("JavaScript is in my blood", 20)
// // повертає 100
// calculateEngravingPrice("Web-development is creative work", 40)
// // повертає 160
// calculateEngravingPrice("Web-development is creative work", 20)
// // повертає 80

// Задача 13
// function slugify(title) {
//   // Change code below this line
//   let slug = title.toLowerCase().split(' ').join('-')
//   console.log(slug);

//   // Change code above this line
// }

// slugify("Arrays for begginers")
// //  повертає "arrays-for-begginers"
// slugify("English for developer")
// // повертає "english-for-developer"
// slugify("Ten secrets of JavaScript")
// // повертає "ten-secrets-of-javascript"
// slugify("How to become a JUNIOR developer in TWO WEEKS")
// // повертає "how-to-become-a-junior-developer-in-two-weeks"

// Задача 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// console.log(fruits);
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// // Задача 16

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//   let concatArr = firstArray.concat(secondArray);
//   let lengthArr = concatArr.length;
//   if (lengthArr >= maxLength) {
//     let sliceArr = concatArr.slice(0, maxLength);
//     return sliceArr;
//   }
//     // Change code above this line
//   }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)
// // повертає["Mango", "Poly", "Ajax"]
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// // повертає["Mango", "Poly", "Houston", "Ajax"]
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)
// // повертає["Mango", "Ajax", "Chelsea"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)
// // повертає["Earth", "Jupiter"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)
// // повертає["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)
// // повертає[]

// // // Задача 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Change this line
//   console.log(i);
// }

// // // Задача 18
// function calculateTotal(number) {
//  // Change code below this line
//   let totalNumber = 0;
//   for (let i = 1; i <= number; i += 1) { // Change this line
//     totalNumber += i;
//   }
//   return totalNumber;
// }

// calculateTotal(1);
// //  повертає 1
//   calculateTotal(3);
// //  повертає 6
//   calculateTotal(7);
// //  повертає 28
//   calculateTotal(18);
// //  повертає 171
//   calculateTotal(24);
// //  повертає 300

// // // Задача 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// // // Задача 20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   console.log(total);
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4])
// //  повертає 138
// calculateTotalPrice([164, 48, 291])
// //  повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176])
// //  повертає 1116

// // // Задача 21
// function findLongestWord(string) {
//   // Change code below this line
//   let arrString = string.split(' ');
//   let longestWord = arrString[0];
//   // console.log(longestWord);

//   for (let i = 1; i < arrString.length; i += 1) {
//     if (arrString[i].length > longestWord.length) {
//       console.log(longestWord);
//     }
//   }
//   return longestWord;
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped over the lazy dog")
// //  повертає jumped
// findLongestWord("Google do a roll")
// //  повертає Google
// findLongestWord("May the force be with you")
// //  повертає force
// // findLongestWord()
// //  з випадковим рядком повертає правильне значення

// // // Задача 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   let number

//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     number = i;
//     numbers.push(number);
//   }
//   // Change code above this line
//   return numbers;
// }

// createArrayOfNumbers(1, 3)
// // повертає[1, 2, 3]
// createArrayOfNumbers(14, 17)
// // повертає[14, 15, 16, 17]
// createArrayOfNumbers(29, 34)
// // повертає[29, 30, 31, 32, 33, 34]
// createArrayOfNumbers()
// //  з випадковими min і max повертає правильний масив

// // // // Задача 23
// function filterArray(numbers, value) {
//    // Change code below this line
//   const arrNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       arrNumbers.push(numbers[i])
//     }
//   }
//   return arrNumbers;
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3)
// // повертає[4, 5]
// filterArray([1, 2, 3, 4, 5], 4)
// // повертає[5]
// filterArray([1, 2, 3, 4, 5], 5)
// // повертає[]
// filterArray([12, 24, 8, 41, 76], 38)
// // повертає[41, 76]
// filterArray([12, 24, 8, 41, 76], 20)
// // повертає[24, 41, 76]
// filterArray()
// //  з випадковим масивом і числом повертає правильний масив

// // // // // Задача 25

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const arrOneTwo = [];
//   console.log(arrOneTwo);
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       arrOneTwo.push(array1[i]);
//     }
//   }
// return arrOneTwo;
//  // Change code above this line
// }

// getCommonElements([1, 2, 3], [2, 4])
// // повертає[2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// // повертає[1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// // повертає[12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])
// // повертає[10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30])
// // повертає[]

// // Задача 26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
// for (const value of order) {
//     total += value
// }
//   // Change code above this line
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4])
// //  повертає 138
// calculateTotalPrice([164, 48, 291])
// //  повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176])
// //  повертає 1116
// calculateTotalPrice([])
// //  повертає 0
// calculateTotalPrice()
// //  з випадковим масивом чисел повертає правильну суму

// // Задача 27 рефакторинг

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1)
//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// // // Задача 29

// function getEvenNumbers(start, end) {
//    // Change code below this line

//   const evenNumbers = [];
//   console.log(evenNumbers);
//   for (let i = start; i <= end; i += 1) {
//     let number = i;
//     console.log(number);
//     let even = i % 2;
//     if (even === 0) {
//       evenNumbers.push(number);
//     }
//   }
//   return evenNumbers;
//     // Change code above this line
//   }

// getEvenNumbers(2, 5)
// // повертає[2, 4]
// getEvenNumbers(3, 11)
// // повертає[4, 6, 8, 10]
// getEvenNumbers(6, 12)
// // повертає[6, 8, 10, 12]
// getEvenNumbers(8, 8)
// // повертає[8]
// getEvenNumbers(7, 7)
// // повертає[]
// getEvenNumbers()
// //  з випадковими start і end повертає правильний масив

// // // Задача 32

// part
// function includes(array, value) {
//   console.log(value);
//   // Change code below this line

//   for (let i = 0; i <= array.length - 1; i += 1) {
//     console.log(array[i]);
//     let valueArr = array[i]
//     console.log(valueArr === value);
//     if (valueArr.string === value) {
//       return Boolean;
//     }
//   }
//   return;
//   }

// includes([1, 2, 3, 4, 5], 3)
// // //  повертає true
// includes([1, 2, 3, 4, 5], 17)
// // //  повертає false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// //  повертає true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// // //  повертає false
// includes(["apple", "plum", "pear", "orange"], "plum")
// // //  повертає true
// includes(["apple", "plum", "pear", "orange"], "kiwi")
// //  повертає false
// // includes() для випадкового масиву з випадковим value повертає правильний boolean
// // У функції includes використовується for, return, але не метод масиву includes
