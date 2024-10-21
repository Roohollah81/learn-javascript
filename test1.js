class Persion {
    talk() {
        return 'Talking';
    }
}

const me = new Persion();
const you = new Persion();

console.log(me.talk());
console.log(you.talk());