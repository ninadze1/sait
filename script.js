function run(){
    let block = document.querySelector('main');
    block.innerHTML = '<p>Выбери животное</p><input type="button" class="btn" value="собака"><input type="button2" class="btn2" value="кошка">';

let button = document.querySelector('.btn');
button.addEventListener('click', run2);
let button2 = document.querySelector('.btn2');
button2.addEventListener('click', run3);

function run2(){
    let block2 = document.querySelector('main');
    block2.innerHTML = '<h1>Сколько лет твоей собаке?</h1><p>Введите возраст собаки</p><input class="petAge" type="text"><input type="button3" class="btn3" value="Посчитать"><p>Возраст собаки в человеческих годах</p><input class="humanAge" type="text"></input>';
    let petAge = document.querySelector('.petAge');
    let humanAge = document.querySelector('.humanAge');
    let age = petAge.value;
    age = Math.floor(age) * 16 +31;
    humanAge.value = age;
}

let button3 = document.querySelector('.btn3');
button3.addEventListener('click', run2);

function run3(){
    let block3 = document.querySelector('main');
    block3.innerHTML = '<h1>Сколько дет твоей кошке?</h1><p>Введите возраст кошки (только для кошек старше 3 лет)</p><input class="catAge" type="text"><input type="button4" class="btn4" value="Посчитать"><p>Возраст кошки в человеческих годах</p><input class="humanAge2" type="text"></input>';
    let catAge = document.querySelector('.catAge');
    let humanAge2 = document.querySelector('.humanAge2');
    let age2 = catAge.value;
    age2 = 24 + (age2 - 2) * 4
    humanAge2.value = Math.floor(age2);
}

let button4 = document.querySelector('.btn4');
button4.addEventListener('click', run3);
}