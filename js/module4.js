// // Проста функція Callback
// function repeatLog(n) {
//     for (let i = 0; i <= n; i += 1) {
//     console.log(i);
//     }
// }
// repeatLog(5);
//
//
//
// Функція фільтрації Callback
// test - в цей аргумент підставляємо callback
// const filter = function (array, test) {
//     // повертаємо масив відфільтрованих значень
//     const filteredArray = [];

//     for (const element of array) {
//         console.log(element);
//         const passed = test(element);

//         if (passed) {
//             filteredArray.push(element);
//         }
//     }
//     return filteredArray;
// }

// // функція callback для знаходження всіх чисел більше 3(включно з 3) в масиві
// const callback1 = function (value) {
//     return value >= 3;
// }
// // функція callback для знаходження всіх чисел менше 4(включно з 4) в масиві
// const callback2 = function (value) {
//     return value <= 4;
// }
// // виводемо результат виклику функції
// console.log(filter([1, 2, 3, 4, 5, 6, 7,], callback1));
// console.log(filter([1, 2, 3, 4, 5, 6, 7,], callback2));
// //
//
//
//
//
//
// // Задача 2
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);;
// }

// console.log(makeMessage("Royal Grand", makePizza));
// //  повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza));
// //  повертає рядок "Delivering Ultracheese pizza."


// // Задача 3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });


// // Стрілкова функція , додає псевдо рандомні числа
// const total = (a, b, c,) => (a + b + c);
// console.log(total(Math.round(Math.random() * (9 - 1) + 1),
//     Math.round(Math.random() * (9 - 1) + 1),
//     Math.round(Math.random() * (9-1)+1)));

// // Задача 4
// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],

//     order(pizzaName, onSuccess, onError, ) {
//         if (this.pizzas.includes(pizzaName)) {
//             return onSuccess(pizzaName)
//         }
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     }
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));


// // Задача 5
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//   // Change code below this line

//     // for (let i = 0; i < orderedItems.length; i += 1) {
//     // totalPrice += orderedItems[i];
//     // }
//     orderedItems.forEach(function (element) {
//         return totalPrice += element
//     });

//   // Change code above this line
//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// //  повертає 138
// console.log(calculateTotalPrice([164, 48, 291]));
// //  повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// //  повертає 1116

// // Задача 5
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//   // Change code below this line

//     // for (let i = 0; i < numbers.length; i += 1) {
//     // if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     // }
//     // }
//     numbers.forEach(function (element) {
//         if (element > value) {
//             filteredNumbers.push(element)
//         }
//     });

//   // Change code above this line
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// // повертає[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// // повертає[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// // повертає[]
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// // повертає[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// // повертає[24, 41, 76]


// // Задача 6
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//   // Change code below this line

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     // if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     // }
//     // }
//     firstArray.forEach(function (number) {
//         console.log(number);
//         if (secondArray.includes(number)) {
//             commonElements.push(number)
//         }
//     });
//     return commonElements;
//   // Change code above this line
// }

// console.log();
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// // повертає[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// // ) повертає[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// // повертає[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// //  повертає[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));
// // повертає[]


// // // Задача 9
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line


// console.log(calculateTotalPrice(5, 100));
// //  повертає 500
// console.log(calculateTotalPrice(8, 60));
// //  повертає 480
// console.log(calculateTotalPrice(3, 400));
// //  повертає 1200


// // // Задача 10
// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;


//     orderedItems.forEach( (item) => {
//     totalPrice += item;
//     });

//     return totalPrice;
// }
// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// //  повертає 138
// console.log(calculateTotalPrice([164, 48, 291]));
// //  повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// //  повертає 1116

// // // Задача 11
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
