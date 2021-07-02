 // //1 задание
 let i = 0;
 while(i <= 100){
    console.log(i);
     i++;
 }

 //2 задание
 var sum = 0;
 var array = [Кофта, Рубашка, Кроссовки]
 for(var item in array)
  if(array[item] == 'Кофта'){
   sum += 1200
  } else if (array[item] == 'Рубашка'){
   sum += 1500
  } else if (array[item] == 'Кроссовки'){
   sum += 11000
  }
 }
 console.log(sum)

 //3 задание
 var product = prompt('Введите название товара')
 var price = prompt('Укажите цену товара')
 array.push(product)

function countBasketPrice(array){
 for(var item in array){
  if(array[item] == 'Кофта'){
   sum += 1200
  } else if (array[item] == 'Рубашка'){
   sum += 1500
  } else if (array[item] == 'Кроссовки'){
   sum += 11000
  }
  sum+= price
 }
}

 //4 задание
 for(i = 0; i < 10; console.log(i), i++) { }

 //5 задание
 var str = ''
 for(i = 0; i < 20; i++) {
  for(var j = 0; j <= i; j++){
   str += '*'
  }
  console.log(str)
  str = ''
 }