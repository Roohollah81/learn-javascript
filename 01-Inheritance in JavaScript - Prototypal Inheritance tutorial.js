// const me = {
//     talk() {
//         return 'Talking';
//     }
// }

// const you = {
//     talk() {
//         return 'Talking';
//     }
// }
// console.log(me.talk());
// console.log(you.talk());

//-------------------------------

// class Person {
//     talk() {
//         return 'Talking';
//     }
// }

// const me = new Person();
// const you = new Person();

// console.log(me.talk());
// console.log(you.talk());

//-------------------------------

class Person {
    talk() {
        return 'Talking';
    }
}

const me = new Person();

console.log(me.talk());

class SuperHuman extends Person {
    fly() {
        return 'Flyiiiiing';
    }
}

const you = new SuperHuman();

console.log(you.fly());

console.log(you.talk());

