// function talk() {
//     return this;
// }

// const me = {
//     name: 'Sina',
//     talk
// }

// console.log(me.talk());

//--------------------------

// function talk() {
//     return `I am ${this.name}`
// }

// const me = {
//     name: 'Sina',
//     talk
// }

// const you = {
//     name: 'Qoli',
//     talk
// }

// console.log(me.talk())
// console.log(you.talk())

//------------------------------

// function talk() {
//     return `I am ${this.name}`
// }

// const me = {
//     name: 'Sina'
// }

// const meTalk = talk.bind(me)

// console.log(meTalk())

//------------------------------

// function talk(lang, isPolite) {
//     if (isPolite) {
//         if (lang === 'en') {
//             return `Hello, I am ${this.name}`
//         } else if (lang === 'it') {
//             return `Ciao bella, sono ${this.name}`
//         }
//     }
    
//     if (!isPolite) {
//         if (lang === 'en') {
//             return `${this.name}, what you want?`
//         } else if (lang === 'it') {
//             return `Sono ${this.name}, 🤞`
//         }
//     }
// }


// const me = {
//     name: 'Sina'
// }

// console.log(talk.call(me, 'it', true))
// console.log(talk.call(me, 'en', true))
// console.log(talk.call(me, 'it', false))
// console.log(talk.call(me, 'en', false))

//----------------------------

function Person(n) {
    this.name = n
    this.talk = function() {
        console.log(this)
    }

    setTimeout(() => {
        console.log(this)
    }, 100)
}

const me = new Person('Sina')
