//1 задание
var a = 1, b = 1, c, d;
c = ++a; //выводится 2 потому что в переменную c записывается увеличенное на еденицу значене переменной a
alert(c);
d = b++; //Здесь выводится 1 потому что, мы сначала передаем переменную d, а затем уже ее увеличиваем
alert(d);
c = (2+ ++a); //Разница в приоритете выполнения инкремента, здесь мы прибавляем 2 к увеличенному значению переменной a
alert(c);
d = (2+ b++); //А здесь мы сначла прибалвяем 2 к b, а затем увеличиваем b
alert(d);
alert(a); //количество инкрементов 3, поэтому и выводится 3
alert(b);

//2 задание
var a = 2;
var x = 1 + (a *= 2); //5

//3 задание
let firstNumber = 42
let secondNumber = 24
if(firstNumber >= 0 && secondNumber >= 0){
    alert(firstNumber - secondNumber);
} else if(firstNumber < 0 && secondNumber < 0){
    alert(firstNumber * secondNumber);
} else{
  alert(firstNumber + secondNumber);
}

//4 задание
firstNumber = Math.floor(Math.random() * (15 + 1)); //присваеваем рандомное значение firstNumber от 0 до 15
//Если в операторе case у нас нет break, то после первого совпадения мы будем заходить в каждый case и выполнять операции,
//которые там находятся. Т.е. мы не будем сравнивать значения, которые стоят после слова case, а сразу будем заходить
//внутрь и выполнять операции. Т.о. у нас выведутся все числа от а до 15
switch (firstNumber){
    case 0:
        console.log(0);
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}

//5 задание
function functionPlus(x, y){
    return Number(x + y).toFixed(3);
}
function functionMinus(x, y) {
    return Number((x - y).toFixed(3));
}
function functionDivision(x, y) {
    return Number(x / y).toFixed(3);
}
function functionMultiplication(x , y) {
    return Number((x * y).toFixed(3));
}

//6 здаание
function mathOperation(arg1, arg2, operation) {
    if (operation == '+') {
        console.log(functionPlus(arg1, arg2));
    } else if (operation == '-') {
        console.log(functionMinus(arg1, arg2));
    } else if (operation == '/') {
        console.log(functionMinus(functionDivision(arg1, arg2)));
    } else if (operation == '*') {
        console.log(functionMultiplication(arg1, arg2));
    } else {
        console.log('Команада не распознана')
    }
}

//8 задание
function power(value, pow) {
    if (pow <= 1) {
        return value;
    }
    return value *= power(value, pow - 1);
}

console.log(power(2,4));