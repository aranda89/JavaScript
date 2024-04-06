// // ** Array **
/* const friends = ['Marcos', 'Ana', 'Marcela']
const num = [1, 2, 3, 4, true]

console.log(friends)
console.log(num) 
*/

// ** Adding values in Array **

/* const num = [7, 8, 9]

num.push(10, 11, 12) add value to the end of the Array

num.unshift(1, 2, 3) add value at beginning of the Array

num.splice(3,0,4,5,6) add values from a start number. 

if want to delete we should specify a number of elements that we want to remove. 
*/

// ** Searching for elements in array ** 

/*console.log(num.idexOf())

console.log(num.include())
*/

// ** Finding items in Array **
/*
const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieName: 'Back to the Future'},
    {id: 3, movieName: 'The Matrix'}
]

console.log(movies.includes({id: 1, movieName: 'Dejavu'}))

console.log(movies.find(function(movie) {
    return movie.movieName == 'The Matrix'
}))

//Arrow function
console.log(movies.find(movie => movie.movieName == 'The Matrix'))
*/

// ** Removing items from Array ** shift (first) | pop (last) | slice (index the num)
/*
const num = [5, 6, 7, 8]
const final = num.pop()

console.log(num)
console.log(final)
*/

// ** empting an Array **
/*
const num = [5, 6, 7, 8]

num = []
num.length = 0 
num.splice(0, num.length)

console.log(num)
*/

// ** Concacting Array **
/*
let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters)
half = all.slice(3, 5)

console.log(all)
console.log(half)
*/

// ** Using Join ** To add anithyng to an array
/*
let clients = ['Andre', 'Jose', 'Marcela']

console.log(clients)

//let clientsJoin = clients.join('a')
let clientsJoin = clients.join(',')

console.log(clientsJoin)
*/

// ** Reversing Array ** 
/*
let clients = ['Andre', 'Jose', 'Marcela']

//clients.sort()
clients.reverse()

console.log(clients)
*/

// ** Checking elements in the Array **

const tempLondon = [18, 13, 8, 2]

const tempPositivo = tempLondon.every(functino(value) {
    
})
