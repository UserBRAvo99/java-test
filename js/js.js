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

const bananСonnection = Number(prompt('Скільки зв`язок бананів',));
console.log(`У нас є ${bananСonnection} звязки бананів`)
const bananPieces = Number(prompt('Скільки бананів в зв`язці',));
console.log(`У нас є ${bananСonnection} звязки бананів по ${bananPieces} штук.`)
const strawberries = Number(prompt('Скільки полуничок',));
console.log(`Полуничок ${strawberries}шт.`)
const bananMore = bananСonnection * bananPieces;
console.log(`Всьго бананів ${bananMore} шт.`)
const strawberriesMore = strawberries - bananMore;
console.log(strawberriesMore)
const total = `У нас є ${bananСonnection} звязки бананів по ${bananPieces} штуки. Всьго бананів ${bananMore} шт. Полуничок більше ніж бананів на ${strawberriesMore} шт`;
console.log(total)


