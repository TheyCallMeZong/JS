//1 Задание
function ConvertToObject(number){
    let obj = {
        единицы: Division(number),
        десятки: Division(number / 10),
        сотни: Division(number / 100)
    }
    return obj
}

function Division(number){
    let num = Math.floor(number % 10)
    return num
}

let number = prompt('Введите число от 0 до 999')
if(number > 999 || number < 0){
    console.log('Число должно быть меньше 999 и больше 0')
} else {
    let obj = ConvertToObject(number)
    console.log(obj)
}

//2 Задание
let cart = {
    products:[
        { name:'T-shirt', price: 999, brand: 'H&M' },
        { name:'shorts', price: 2499, brand: 'H&M'},
        { chapter: 'Original', price: 15000, brand: 'Adidas' }
    ],
    addNewProduct: function (product){
        clothes.push(product)
    },
    getTotalPrice: function (){
        let sum = 0
        for (let product of this.products){
           sum += product.price
        }
        return sum
    }
}

console.log(shop.getTotalPrice())