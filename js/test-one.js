
//Арифметичний тест для 3-го класу з псевдо рандомними числами
// знайомство
const name = prompt(`Привіт, це арифметичний тест. Та для початку давай знайомитися. Напиши своє ім'я`);
// масив для підрахунку правильних та неправильних відповідей
const yes = [];
const no = [];
//рандомна дія
let randomAction = 0;
// змінні для дії множення
let a = 0;
let b = 0;
// змінні для дії віднімання
let c = 0;
let d = 0;
// змінні для дії додавання
let e = 0;
let f = 0;
// змінна для дії ділення навпіл
let g = 0;
//змшнні для дії ділення
let n = 2;
let randomTwo = 0;
let randomThree = 0;
let randomFour = 0;
let randomFive = 0;
let randomSix = 0;
let randomSeven = 0;
let randomEight = 0;
let randomNine = 0;

//множеняя
const funActionOne = () => {
    const expressionOne = prompt(`${name}, помнож ${a} * ${b}, та запиши відповідь.`);
    (a * b) === Number(expressionOne) ? alert(`Вірно, відповідь - ${a * b}.`) : alert(`Не вірно, відповідь - ${a * b}.`);
    (a * b) === Number(expressionOne) ? yes.push(1) : no.push(1);
}
//віднімання
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
    // функція перевірки/зміни числа на число яке ділеться на 2 без остачі
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
//дія ділення
const funActionEight = () => {
    // функція для порівняння рандомного числа з дією
const o = () => {
        if (n === 2) {
            return (randomTwo === 1) ? 1 : (randomTwo === 2) ? 2 : (randomTwo === 3) ? 3 : (randomTwo === 4) ? 4 : (randomTwo === 5) ? 5 : (randomTwo === 6) ? 6 : (randomTwo === 7) ? 7 : (randomTwo === 8) ? 8 : (randomTwo === 9) ? 9 : 10;
        } else if (n === 3) {
            return (randomThree === 1) ?  1 : (randomThree === 2) ?  3 : (randomThree === 4) ?  4: (randomThree === 5) ?  5 : (randomThree === 6) ?  6 : (randomThree === 7) ?  7 : (randomThree === 8) ?  8 : (randomThree === 9) ?  9 : 10;
        } else if (n === 4) {
            return (randomFour === 1) ?  1 : (randomFour === 2) ?  3: (randomFour === 4) ?  4: (randomFour === 5) ?  5: (randomFour === 6) ?  6: (randomFour === 7) ?  7: (randomFour === 8) ?  8: (randomFour === 9) ?  9 : 10;
        } else if (n === 5) {
            return (randomFive === 1) ?  1 : (randomFive === 2) ?  3: (randomFive === 4) ?  4: (randomFive === 5) ?  5: (randomFive === 6) ?  6: (randomFive === 7) ?  7: (randomFive === 8) ?  8: (randomFive === 9) ?  9 : 10;
        } else if (n === 6) {
            return (randomSix === 1) ?  1 : (randomSix === 2) ?  3: (randomSix === 4) ?  4: (randomSix === 5) ?  5: (randomSix === 6) ?  6: (randomSix === 7) ?  7: (randomSix === 8) ?  8: (randomSix === 9) ?  9 : 10;
        } else if (n === 7) {
            return (randomSeven === 1) ?  1 : (randomSeven === 2) ?  3: (randomSeven === 4) ?  4: (randomSeven === 5) ?  5: (randomSeven === 6) ?  6: (randomSeven === 7) ?  7: (randomSeven === 8) ?  8: (randomSeven === 9) ?  9 : 10;
        } else if (n === 8) {
            return (randomEight === 1) ?  1 : (randomEight === 2) ?  3: (randomEight === 4) ?  4: (randomEight === 5) ?  5: (randomEight === 6) ?  6: (randomEight === 7) ?  7: (randomEight === 8) ?  8: (randomEight === 9) ?  9 : 10;
        } else if (n === 9) {
            return (randomNine === 1) ?  1 : (randomNine === 2) ?  3: (randomNine === 4) ?  4: (randomNine === 5) ?  5: (randomNine === 6) ?  6: (randomNine === 7) ?  7: (randomNine === 8) ?  8: (randomNine === 9) ?  9 : 10;
        }
    }
    const expressionEight = prompt(`${name}, поділи ${o() * n} на ${n} , та запиши відповідь`);
    ((o() * n) / n) === Number(expressionEight) ? alert(`Вірно, відповідь - ${(o() * n) / n}.`) : alert(`Не вірно, відповідь - ${(o() * n) / n}.`);
    ((o() * n) / n) === Number(expressionEight) ? yes.push(1) : no.push(1);
}



//функція виклику дії
const funAction = () => {
    (randomAction === 1) ? funActionOne() : (randomAction === 2) ? funActionTwo() : (randomAction === 3) ? funActionThree() : (randomAction === 4) ? funActionFour() : (randomAction === 5) ? funActionFive() : (randomAction === 5) ? funActionSix() : (randomAction === 6) ? funActionSeven() : funActionEight();
}

//лічильник який запустить функцію і - разів
for (let i = 1; i <= 10; i += 1) {
    funAction();
    randomAction = Math.round(Math.random() * (5 - 1) + 1)

    a = Math.round(Math.random() * (9 - 1) + 1);
    b = Math.round(Math.random() * (9 - 1) + 1);

    c = Math.round(Math.random() * (100 - 50) + 50);
    d = Math.round(Math.random() * (50 - 1) + 1);

    e = Math.round(Math.random() * (99 - 50) + 1);
    f = Math.round(Math.random() * (50 - 1) + 1);
    //змінні які рандомно змінюються для дії ділення
    n = Math.round(Math.random() * (9 - 2) + 2);
    randomTwo = Math.round(Math.random() * (10 - 1) + 2);
    randomThree = Math.round(Math.random() * (10 - 1) + 2);
    randomFour = Math.round(Math.random() * (10 - 1) + 2);
    randomFive = Math.round(Math.random() * (10 - 1) + 2);
    randomSix = Math.round(Math.random() * (10 - 1) + 2);
    randomSeven = Math.round(Math.random() * (10 - 1) + 2);
    randomEight = Math.round(Math.random() * (10 - 1) + 2);
    randomNine = Math.round(Math.random() * (10 - 1) + 2);
}
//підсумок вирішених виразів
const sum = () => {
    if (yes.length === 10) {
        return alert(`${name}, ого як круто, всі тести вірні!!! Ти геній?`)
    } else {
        return alert(`${name}, молодець! В тебе правильних ${yes.length} відповідей, та ${no.length} помилок.`)
    }
}
sum()


