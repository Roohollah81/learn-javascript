// function Person(name) {
//     this.name = name
// }

// const sina = new Person('Sina')

// console.log(sina)

//--------------------------------

function Person(name) {
    this.name = name
    this.talk = () => {
        return `Hello I am ${this.name}`
    }
}

const sina = new Person('Sina')
const ben = new Person('Ben')
const sam = new Person('Sam')
