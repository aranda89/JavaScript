//Types of variables - Primitive
//String
let itemName = 'Pen'

//Number
let itemPrice = 3

//Boolean
let itemAvailable = true

//Undefined
let itemColor = '...'

//Type of variables - Reference
//Object
let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

pen.itemColor = 'green' //changing properties

console.log(pen)

let friends = ['Marcos', 'Silvia','Elisa']
friends [1] = 'Aranda' //changing the list if the Array
console.log(friends)

//Functions
                      //|-------|-> Parameters
function salesStatus (status, total) {
    console.log('Transaction ' + status + ' Total amount: $' + total)
}
                //|------|-> Arguments
salesStatus('Approved!', 30)

function percentage10(price) {
    return price - (price * 10 / 100)
}
console.log(percentage10(40))


