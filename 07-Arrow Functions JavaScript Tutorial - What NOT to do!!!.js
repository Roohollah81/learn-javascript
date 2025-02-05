// const sayHello = function () {
//     return 'hello'
// }

// console.log(sayHello());

// const sayHello = () => {
//     return 'hello'
// }

// console.log(sayHello())

// const sayHello2 = (name) => {
//     return `Hello, ${name}`
// }

// console.log(sayHello2)

// const sayHello3 = (name) => {
//     return `Hello, ${name}`
// }

// console.log(sayHello3("Sina"))

// const sayHello = (firstName, lastName) => {
//     return `Hello ${firstName}, ${lastName}`
// }

// console.log(sayHello('Sina','Jaz'))

// const sayHello = firstName => {
//     return `Hello ${firstName}`
// }

// console.log(sayHello('Sina'))

// const sayHello = firstName => `Hello ${firstName}`

// console.log(sayHello('Sina'))

// const sayHello = function() {
//     console.log(arguments)
// }

// console.log(sayHello('Sina', 'Jaz', 14))

// setTimeout(function() {
//     console.log('Hello')
// }, 1000)

// setTimeout(() => {
//     console.log('Hello')
// }, 1000)

// function sayHello() {
//     console.log(`Hello`)
// }

// console.log(sayHello())

// function Person(n) {
//     this.name = n
// }

// const me = new Person('Sina')

// console.log(me)


// const me = {
//     talk: function() {
//         return `hello`
//     }
// }

// console.log(me.talk())

// const you = {
//     talk: () => {
//         return 'hello'
//     }
// }

// console.log(you.talk())

// const me = {
//     name: 'Sina',
//     talk: function() {
//         return this
//     },
//     arrowTalk: () => {
//         return this
//     }
// }

// console.log(me.talk())

// console.log(me.arrowTalk())

// const me = {
//     name: 'Sina',
//     talk() {
//         setTimeout(() => {
//             console.log(this.name)
//         }, 100)
//     }
// }

// console.log(me.talk())

// function outer(callback) {
//     callback()
// }

// function inner() {
//     console.log(this)
// }

// console.log(outer(inner))

function outer(callback, obj) {
    callback.call(obj)
}

function inner() {
    console.log(this)
}

console.log(outer(inner, {name: 'Sina'}))

