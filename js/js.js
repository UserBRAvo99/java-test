"use strict";
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