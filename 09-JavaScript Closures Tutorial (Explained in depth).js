// function human() {
//     const name = 'Sina'
//     function sayHi() {
//         console.log(`Hi Im am ${name}`)
//     }
//     sayHi()
// }

// human()

//----------------------

// function human() {
//     const name = 'Sina'
//     function sayHi() {
//         console.log(`Hi Im am ${name}`)
//     }
//     function sayHowYouFeel() {
//         console.log(`${name} is feeling good!`)
//     }
//     sayHi()
//     sayHowYouFeel()
// }

// human()

//-----------------------

// function human(name) {
//     function sayHi() {
//         console.log(`Hi Im am ${name}`)
//     }
//     function sayHowYouFeel() {
//         console.log(`${name} is feeling good!`)
//     }
//     sayHi()
//     sayHowYouFeel()
// }

// human('Sina')

//----------------------

// function human(n) {
//     const name = n
//     function sayHi() {
//         console.log(`Hi Im am ${name}`)
//     }
//     function sayHowYouFeel() {
//         console.log(`${name} is feeling good!`)
//     }
//     return {
//         sayHi,
//         sayHowYouFeel
//     }
// }

// const sina = human('Sina')
// const qoli = human('Qoli')

// console.log(sina.sayHi())

//----------------------

function clickHandler(size) {
    return function() {
        document.body.style.fontSize = `${size}px`
    }
}

document.getElementById('size-12').onclick = clickHandler(12)