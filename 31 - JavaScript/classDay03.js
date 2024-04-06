// ** OOP ** - Obeject Oriented Programming

// Book 

//** Properties **
// Title
// Author
// Pages
// Price

//** Methods **
// Read
// Sell
// Buy
// Info

//--Related elements from the book
// let bookTitle = 'Atomic Habits'
// let bookAuthor = 'James Clear'
// let bookPages = '306'

// // ** Factory **
// function createBook (title, author, pages) {
//     const book = {
//         bookTitle: title,
//         bookAuthor: author,
//         bookPages: pages,
//         printBook: function() {
//             console.log('printing...')
//         }
//     }
//     return book
// }    

// const book1 = createBook('Atomic', 'James', 306)
// const book2 = createBook('Think', 'Napolean', 400)

// book1.color ='White'

// console.log(book1)
// console.log(book2)

// function printBook() {
//     console.log('printing...')
// }

// ** Contructor **
// function CreateBook (title, author, pages) {    
//     this.bookTitle= title;
//     this.bookAuthor= author;
//     this.bookPages= pages
// }    

// const book1 = new CreateBook('Atomic', 'James', 306)

// console.log(book1)

// ** Built-in Objects **
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// ** built-in strings ** 
// let message = 'Hey, my name is Aranda'

//console.log(message.startsWith('Hey'))

//console.log(message.length)

//console.log(message.includes('Ara')) //Results as boolean

// ** Literals Templates **

// let firstName = 'Joe'

// const email = 'Hi' + firstName + ', \nThe meeting is confirmed! \nAranda'
// const email2 = `Hi ${firstName}, The meeting is confirmed! Aranda`

// console.log(email)
// console.log(email2)