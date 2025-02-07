// let pizza
// function orderPizza() {
//     console.log('Order pizza')
//     pizza = '🍕'
//     console.log('Pizza was ordered')
// }
// orderPizza()
// console.log(`Eat ${pizza}`)

//------------------

// let pizza
// function orderPizza() {
//     console.log('Order pizza')
//     setTimeout(() => {
//         pizza = '🍕'
//     }, 2000)
//     console.log('Pizza was ordered')
// }
// orderPizza()
// console.log(`Eat ${pizza}`)

//------------------

// let pizza
// function orderPizza() {
//     console.log('Order pizza')
//     setTimeout(() => {
//         pizza = '🍕'
//         console.log(`${pizza} is ready`)
//     }, 2000)
//     console.log('Pizza was ordered')
// }
// orderPizza()
// console.log('Call Qoli')
// console.log(`Eat ${pizza}`)

//------------------

// function orderPizza(callback) {
//     setTimeout(() => {
//         pizza = '🍕'
//        callback(pizza)
//     }, 2000)
// }
// function pizzaReady(pizza) {
//     console.log(`Eat the ${pizza}`)
// }
// orderPizza(pizzaReady)
// console.log('Call Qoli')

//-----------------

// window.addEventListener('click', callback)

// function callback() {
//     console.log('Clicked')
// }

//-----------------

function thing1(callback) {
    callback()
}

function thing2(callback) {
    callback()
}

function thing3(callback) {
    callback()
}

thing1(() => {
    thing2(() => {
        thing3()
    })
})