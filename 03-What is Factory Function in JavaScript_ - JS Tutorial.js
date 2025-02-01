// const me = {
//     talk() {
//         return 'Hello I am Sina'
//     }
// }

// const ben = {
//     talk() {
//         return 'Hello I am Ben'
//     }
// }

// console.log(me.talk())

// console.log(ben.talk())

// -------------------------------

// const me = {
//     name: 'Sina',
//     talk() {
//         return `Hello Im ${this.name}`;
//     }
// }

// const ben = {
//     name: 'Ben',
//     talk() {
//         return `Hello I am ${this.name}`;
//     }
// }

// console.log(me.talk());
// console.log(ben.talk());

// me.name = 'Sam';

// console.log(me.talk());

// -------------------------------

function personFactory(name) {
    return {
        talk() {
            return `Hello I am ${name}`
        }
    }
}

const me = personFactory('Sina');

console.log(me.talk());

const ben = personFactory('Ben');

console.log(ben.talk());

const jill = personFactory('Dr. Jill');

console.log(jill.talk());