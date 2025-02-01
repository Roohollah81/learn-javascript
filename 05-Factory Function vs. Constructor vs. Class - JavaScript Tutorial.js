// function createPerson(name) {
//     return {
//         name: name,
//         talk() {
//             return `I am ${this.name}`
//         }
//     }
// }

// const me = createPerson('Sina')
// const you = createPerson('Qoli')

// console.log(me.talk())
// console.log(you.talk())

// me.talk = function() {
//     return `Hello, I am ${this.name}`
// }

// console.log(me.talk())

//------------------------------

// const myCoolProto = {
//     talk() {
//         return `Hello, I am ${this.name}`
//     }
// }

// function createPerson(name) {
//     return Object.create(myCoolProto, {
//         name: {
//             value: name
//         }
//     })
// }

// const me = createPerson('Sina')

// console.log(me.talk())

//---------------------------------

function Person(name) {
    this.name = name
}

const ben = new Person('Ben')

Person.prototype.talk = function() {
    return `Hello, I am ${this.name}`
}

console.log(ben.talk())

const sam = new Person('Sam')

console.log(sam.talk())

Person.prototype.talk = function() {
    return `Ciao, io sono ${this.name}`
}

console.log(ben.talk())
console.log(sam.talk())

