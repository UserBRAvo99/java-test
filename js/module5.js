

// Заадання 10
// class Storage {
//   items
//   constructor(items) {
//     this.items = items
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     return this.items = this.items.filter(item => item != itemToRemove)
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Цікава задача)))
// function reverseWords(str) {
//   // Go for it
//     return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
// // , 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// console.log(reverseWords('apple'));
// // , 'elppa');
// console.log(reverseWords('a b c d'));
// // , 'a b c d');
// console.log(reverseWords('double  spaced  words'));
// // , 'elbuod  decaps  sdrow');

// var isSquare = function(n){
//     // const number = Math.round(Math.sqrt(n))
//     return (Math.round(Math.sqrt(n)) * Math.round(Math.sqrt(n))) === n ? true : false;
// }

// console.log(isSquare(-1));
// // , false, "-1: Negative numbers cannot be square numbers");
// console.log(isSquare( 0));
// // , true, "0 is a square number (0 * 0)");
// console.log(isSquare( 3));
// // , false, "3 is not a square number");
// console.log(isSquare( 4));
// // , true, "4 is a square number (2 * 2)");
// console.log(isSquare(25));
// // , true, "25 is a square number (5 * 5)");
// console.log(isSquare(26));
// // , false, "26 is not a square number");


// const randomNumber = Math.round(Math.random() * (5 - 1) + 1);
// let body = document.querySelector('body');

// const randomBg = () => {
//     if (randomNumber === 1) {
//         return body = body.style.backgroundColor = '#B73DCA';
//     } else if (randomNumber === 2) {
//         return body = body.style.backgroundColor = '#3D46CA';
//     } else if (randomNumber === 3) {
//         return body = body.style.backgroundColor = '#3DCAB2';
//     } else if (randomNumber === 4) {
//         return body = body.style.backgroundColor = '#3DCA59';
//     } else {
//         return body = body.style.backgroundColor = '#CACA3D';
//     }
// }

// console.log(randomBg());


// Перша версія
// //знайомство
// const name = prompt(`Привіт, це арифметичний тест. Та для початку давай знайомитися. Напиши своє ім'я`);

// //вірна відповідь
// const yes = [];
// //невірна відповідь
// const no = [];
// //рандомний вираз
// let randomAction = 0;
// //рандомні значення на кожну ітерацію
// let a = 0;
// let b = 0;
// let c = 0;
// let d = 0;
// let e = 0;
// let f = 0;
// let g = 0;
// //перша дія - перший множник та другий множник
// const funActionOne = () => {
//     // const a = Math.round(Math.random() * (9 - 1) + 1);
//     // const b = Math.round(Math.random() * (9 - 1) + 1);
//     const expressionOne = prompt(`${name}, помнож ${a} * ${b}, та запиши відповідь.`);
//     // if ((a * b) === Number(expressionOne)) {
//     //     yes.push(1);
//     // } else {
//     //     no.push(1);
//     // }
//     (a * b) === Number(expressionOne) ? yes.push(1) : no.push(1);
// }
// //друга дія віднімання
// const funActionTwo = () => {
//     // const c = Math.round(Math.random() * (100 - 50) + 50);
//     // const d = Math.round(Math.random() * (50 - 1) + 1);
//     const expressionTwo = prompt(`${name}, відніми від ${c} - ${d}, та запиши відповідь`);
//     // if ((c - d) === Number(expressionTwo)) {
//     //     yes.push(1);
//     // } else {
//     //     no.push(1);
//     // }
//     (c - d) === Number(expressionTwo) ? yes.push(1) : no.push(1);
// }
// //третя ді додавання
// const funActionThree = () => {
//     // const e = Math.round(Math.random() * (99 - 50) + 1);
//     // const f = Math.round(Math.random() * (50 - 1) + 1);
//     const expressionThree = prompt(`${name}, додай ${e} + ${f}, та запиши відповідь`);
//     // if ((e + f) === Number(expressionThree)) {
//     //     yes.push(1);
//     // } else {
//     //     no.push(1);
//     // }
//     (e + f) === Number(expressionThree) ? yes.push(1) : no.push(1);
// }
// // четверта дія - ділення навпіл
// const funActionFour = () => {
//     // const g = Math.round(Math.random() * (200 - 2) + 2);
//     console.log(g % 2);
//     // функція перевіряє чи число ділиться на 2, та змінює його за потреби
//     const h = () => {
//         if ((g % 2) === 0) {
//             return g;
//         } else {
//             return (g + 1);
//         }
//     }
//     const expressionFour = prompt(`${name}, поділи число ${Number(h())} навпіл. та запиши відповідь`);
//     // if ((Number(h()) / 2) === Number(expressionFour)) {
//     //     yes.push(1);
//     // } else {
//     //     no.push(1);
//     // }
//     // (Number(h()) / 2) === Number(expressionFour) ? yes.push(1) : no.push(1);
// }
// //функція виклику дії
// const funAction = () => {
//     // if (randomAction === 1) {
//     //     funActionOne();
//     // } else if (randomAction === 2) {
//     //     funActionTwo();
//     // }  else if (randomAction === 3) {
//     //     funActionThree();
//     // } else if (randomAction === 4) {
//     //     funActionFour();
//     // }
//     (randomAction === 1) ? funActionOne() : (randomAction === 2) ? funActionTwo() : (randomAction === 3) ? funActionThree() : funActionFour();
// }

// //лічильник який запустить функцію і - разів

// for (let i = 1; i <= 20; i += 1) {
//     funAction();
//     randomAction = Math.round(Math.random() * (4 - 1) + 1)
//     a = Math.round(Math.random() * (9 - 1) + 1);
//     b = Math.round(Math.random() * (9 - 1) + 1); 
//     c = Math.round(Math.random() * (100 - 50) + 50);
//     d = Math.round(Math.random() * (50 - 1) + 1); 
//     e = Math.round(Math.random() * (99 - 50) + 1);
//     f = Math.round(Math.random() * (50 - 1) + 1);
//     g = Math.round(Math.random() * (200 - 2) + 2);
// }

// const sum = () => {
//     if (yes.length === 20) {
//         return alert(`${name}, ого як круто, всі тести вірні!!! Ти геній?`)
//     } else {
//         return alert(`${name}, молодець! В тебе правильних ${yes.length} відповідей, та ${no.length} помилок.`)
//     }
// }
// sum()

//знайомство
const name = prompt(`Привіт, це арифметичний тест. Та для початку давай знайомитися. Напиши своє ім'я`);

const yes = [];
const no = [];

let randomAction = 0;

let a = 0;
let b = 0;

let c = 0;
let d = 0;

let e = 0;
let f = 0;

let g = 0;

// let i = 0;

// let j = 0;

// let k = 0;
// let l = 0;
// let m = 0;

const funActionOne = () => {
    const expressionOne = prompt(`${name}, помнож ${a} * ${b}, та запиши відповідь.`);
    (a * b) === Number(expressionOne) ? alert(`Вірно, відповідь - ${a * b}.`) : alert(`Не вірно, відповідь - ${a * b}.`);
    (a * b) === Number(expressionOne) ? yes.push(1) : no.push(1);
}

const funActionTwo = () => {

    const expressionTwo = prompt(`${name}, відніми від ${c} - ${d}, та запиши відповідь`);
    (c - d) === Number(expressionTwo) ? alert(`Вірно, відповідь - ${c - d}.`) : alert(`Не вірно, відповідь - ${c - d}.`);
    (c - d) === Number(expressionTwo) ? yes.push(1) : no.push(1);
}
//третя дія додавання
const funActionThree = () => {
    const expressionThree = prompt(`${name}, додай ${e} + ${f}, та запиши відповідь`);
    (e + f) === Number(expressionThree) ? alert(`Вірно, відповідь - ${e + f}.`) : alert(`Не вірно, відповідь - ${e + f}.`);
    (e + f) === Number(expressionThree) ? yes.push(1) : no.push(1);
}
// четверта дія - ділення навпіл
const funActionFour = () => {
    const g = Math.round(Math.random() * (80 - 4) + 4);
    const h = () => {
        if ((g % 2) === 0) {
            return g;
        } else {
            return (g + 1);
        }
    }
    const expressionFour = prompt(`${name}, поділи число ${Number(h())} навпіл. та запиши відповідь`);
    (Number(h()) / 2) === Number(expressionFour) ? alert(`Вірно, відповідь - ${Number(h()) / 2}.`) : alert(`Не вірно, відповідь - ${Number(h()) / 2}.`);
    (Number(h()) / 2) === Number(expressionFour) ? yes.push(1) : no.push(1);
}
// скільки міліметрів в сантиметрі
const funActionFive = () => {
    const i = Math.round(Math.random() * (10 - 1) + 1);
    const expressionFive = prompt(`${name}, Скільки міліметрів в  ${i} сантиметрах`);
    (i * 10) === Number(expressionFive) ? alert(`Вірно, відповідь - ${i * 10} міліметрів.`) : alert(`Не вірно, відповідь - ${i * 10} міліметрів.`);
    (i * 10) === Number(expressionFive) ? yes.push(1) : no.push(1);
}

// скільки сантиметрів в дециметрі
const funActionSix = () => {
    const j = Math.round(Math.random() * (10 - 1) + 1);
    const expressionSix = prompt(`${name}, Скільки міліметрів в  ${j} сантиметрах`);
    (j * 10) === Number(expressionSix) ? alert(`Вірно, відповідь - ${j * 10} сантиметрів.`) : alert(`Не вірно, відповідь - ${j * 10} сантиметрів.`);
    (j * 10) === Number(expressionSix) ? yes.push(1) : no.push(1);
}
//додай послідовні числа
const funActionSeven = () => {
    const k = Math.round(Math.random() * (20 - 1) + 1);
    const l = Math.round(Math.random() * (20 - 1) + 1);
    const m = Math.round(Math.random() * (20 - 1) + 1);
    const expressionSeven = prompt(`${name}, додай ${k} + ${l} + ${m}, та запиши відповідь`);
    (k + l + m) === Number(expressionSeven) ? alert(`Вірно, відповідь - ${k + l + m}.`) : alert(`Не вірно, відповідь - ${k + l + m}.`);
    (k + l + m) === Number(expressionSeven) ? yes.push(1) : no.push(1);
}

//функція виклику дії
const funAction = () => {
    (randomAction === 1) ? funActionOne() : (randomAction === 2) ? funActionTwo() : (randomAction === 3) ? funActionThree() : (randomAction === 4) ? funActionFour() : (randomAction === 5) ? funActionFive() : (randomAction === 5) ? funActionSix() : funActionSeven();
}

//лічильник який запустить функцію і - разів

for (let i = 1; i <= 20; i += 1) {
    funAction();
    randomAction = Math.round(Math.random() * (5 - 1) + 1)
    a = Math.round(Math.random() * (9 - 1) + 1);
    b = Math.round(Math.random() * (9 - 1) + 1); 

    c = Math.round(Math.random() * (100 - 50) + 50);
    d = Math.round(Math.random() * (50 - 1) + 1); 

    e = Math.round(Math.random() * (99 - 50) + 1);
    f = Math.round(Math.random() * (50 - 1) + 1);

    // i = Math.round(Math.random() * (10 - 1) + 1);

    // j = Math.round(Math.random() * (10 - 1) + 1);

    // k = Math.round(Math.random() * (20 - 1) + 1);
    // l = Math.round(Math.random() * (20 - 1) + 1);
    // m = Math.round(Math.random() * (20 - 1) + 1);
}

const sum = () => {
    if (yes.length === 20) {
        return alert(`${name}, ого як круто, всі тести вірні!!! Ти геній?`)
    } else {
        return alert(`${name}, молодець! В тебе правильних ${yes.length} відповідей, та ${no.length} помилок.`)
    }
}
sum()



