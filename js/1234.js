const taskBoxEl = document.querySelector('.task-box');
const taskTitleEl = document.querySelector('.task');

const bodyEl = document.querySelector('body');

// масив для підрахунку правильних та неправильних відповідей
const yes = [];
const no = [];
// змінні для дії множення
let a = 0;
let b = 0;
a = Math.round(Math.random() * (9 - 1) + 1);
b = Math.round(Math.random() * (9 - 1) + 1);
let reply = '';
let replyNumber = 0;
//множеняя
function funActionOne() {
    reply = `Помнож ${a} * ${b}, та запиши відповідь.`;
    replyNumber = a * b;
}
funActionOne();
console.log(replyNumber);
function makeTask() {
    return `<div class="task-box">
        <p class="task">${reply}</p>
        <input type="text" class="input-task" placeholder="Напиши тут відповідь">
        <button class="btn">ok</button>
    </div>`;
}

taskBoxEl.insertAdjacentHTML('beforeend', makeTask());
const inputEl = document.querySelector('.input-task');
const btnEl = document.querySelector('.btn');
let inputReply = 0;
inputEl.addEventListener('input', event => {
    console.log(+event.target.value);
    inputReply = +event.target.value;
});

btnEl.addEventListener('click', event => {
    inputEl.readOnly = true;
    if (replyNumber === inputReply) {
        console.log('yes');
    } else {
        console.log('no');
    }
});
