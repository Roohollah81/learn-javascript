// const dude = {};

// dude.name = 'SINAAAAAAAAAAAAA';
// dude.age = 34;

// console.log(dude);

// ---------------------------------

// const myBroders = ['Ben','Sam'];

// console.log(myBroders)

// ---------------------------------

// const human = {
//     kind: 'Human'
// }

// const sina = Object.create(human);

// sina.age = 34;

// console.log(sina.age);
// console.log(sina.kind);

// const ben = Object.create(sina);

// ben.age = 12;

// console.log(ben.age);
// console.log(ben.kind);

// ---------------------------------

class Human {
    talk() {
        return 'Talking';
    }
}

class SuperHuman extends Human {
    fly() {
        return 'Flying';
    }
}

const ben = new SuperHuman();

console.log(ben.fly);
console.log(ben.talk);


