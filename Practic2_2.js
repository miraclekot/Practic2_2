document.write('<h3>Задание №1</h3>')
document.write(`<pre>
fruits = new Array();
fruits[0] = 'Апельсин';
fruits[1] = 'Гранат';
fruits[2] = 'Слива';
fruits[3] = 'Груша';
fruits[4] = 'Персик';
fruits[5] = 'Киви';
var fruits2 = new Array('Апельсин', 'Гранат', 'Слива', 'Груша', 'Персик', 'Киви');
var fruits3 = ['Апельсин', 'Гранат', 'Слива', 'Груша', 'Персик', 'Киви'];
</pre>`)
fruits = new Array();
fruits[0] = 'Апельсин';
fruits[1] = 'Гранат';
fruits[2] = 'Слива';
fruits[3] = 'Груша';
fruits[4] = 'Персик';
fruits[5] = 'Киви';
var fruits2 = new Array('Апельсин', 'Гранат', 'Слива', 'Груша', 'Персик', 'Киви');
var fruits3 = ['Апельсин', 'Гранат', 'Слива', 'Груша', 'Персик', 'Киви'];

document.write('<h3>Задание №2</h3>')
document.write(fruits3[5] + '<br />');
fruits3[5] = 'Яблоко';

document.write('<h3>Задание №3</h3>')
for (i = 0; i < fruits3.length; i++) {
    document.write('<span title = "' + fruits3.length + '">' + fruits3[i] + ' ' + '</span>');
}
document.write('<br />');

document.write('<h3>Задание №4</h3>')
for (i = 0; i < fruits3.length; i++) {
    document.write(fruits3[i] + ' ');
}
document.write('<br />');

document.write('<h3>Задание №5</h3>')
var color = ['Голубой', 'Фиолетовый', 'Берюзовый', 'Тиффани', 'Розовый', 'Зеленый'];
var fruits4 = ['Апельсин', 'Гранат', 'Слива', 'Груша', 'Персик', 'Киви'];
document.write('Получившийся массив: ');
var allColorFruits = color.concat(fruits4);
for (i = 0; i < allColorFruits.length; i++) {
    document.write(allColorFruits[i] + ' ');
}
document.write('<br />');

document.write('<h3>Задание №6-7</h3>')
del = allColorFruits.pop();
document.write('Удаленный элемент: ' + del + '<br />');
document.write('Получившийся массив: ');
for (i = 0; i < allColorFruits.length; i++) {
    document.write(allColorFruits[i] + ' ');
}
document.write('<br />');

document.write('<h3>Задание №8</h3>')
allColorFruits.unshift('Арбуз');
document.write('Добавленный элемент: ' + allColorFruits[0] + '<br />');
document.write('Получившийся массив: ');
for (i = 0; i < allColorFruits.length; i++) {
    document.write(allColorFruits[i] + ' ');
}
document.write('<br />');

document.write('<h3>Задание №9</h3>')
x = new Date();
document.write(x + '<br />');

document.write('<h3>Задание №10</h3>')
month = x.getMonth();
switch (month) {
    case 0:
        month = 'Января';
        break;
    case 1:
        month = 'Февраля';
        break;
    case 2:
        month = 'Марта';
        break;
    case 3:
        month = 'Апреля';
        break;
    case 4:
        month = 'Мая';
        break;
    case 5:
        month = 'Июня';
        break;
    case 6:
        month = 'Июля';
        break;
    case 7:
        month = 'Августа';
        break;
    case 8:
        month = 'Сентября';
        break;
    case 9:
        month = 'Октбяря';
        break;
    case 10:
        month = 'Ноября';
        break;
    case 11:
        month = 'Декабря';
        break;
    default:
        document.write('Некорректный ввод');
        break;
}
document.write(x.getDate() + ' ' + month + ' ' + x.getFullYear() + ' года' + '<br />');

document.write('<h3>Задание №11</h3>')
function multiplication() {
    x = Math.round(Math.random() * 50);
    y = Math.round(Math.random() * 50);
    xy = x * y;
    document.write(xy);
}
multiplication();