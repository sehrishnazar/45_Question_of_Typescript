// Q no.21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item {
    name : string
    price : number
}
const book : item ={
    name : "Esssential Typescript"
    price : 450

}
const apple : item = {
    name : "apple"
    price : 200

}
console.log (`book name : ${book.name}, Price: $${book.price}`)
console.log (`apple Name : ${apple.name}, price: $${apple.price}`)