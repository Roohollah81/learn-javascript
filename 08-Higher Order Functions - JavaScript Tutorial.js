// const names = ['Sina', 'Sam', 'Qoli', 'Ben', 'Zoe', 'Quentin', 'Ala']

// names.filter(n => n[0] !== 'Q')
//      .filter(n => n.length >= 5)
//      .map(n => {
//         const el = document.createElement('p')
//         el.innerText = n
//         return el
//      })

// names.filter(isNotQ)
//      .filter(isMinimum5)
//      .map(convertToEl)

// function isNotQ(n) {
//     return n[0] !== 'Q'
// }

// function isMinimum5(n) {
//     return n.length >= 5
// }

// function convertToEl(n) {
//     const el = document.createElement('p')
//     el.innerText = n
//     return el
// }

{/* <button onclick="onClick12">12px</button> */}
{/* <button onclick="onClick14">14px</button> */}
{/* <button onclick="onClick16">16px</button> */}

// function onClick12() {
//     document.body.style.fontSize = '12px'
// }

// function onClick14() {
//     document.body.style.fontSize = '14px' 
// }

// function onClick16() {
//     document.body.style.fontSize = '16px'
// }

const onClick12 = makeClickHandler(12)
const onClick14 = makeClickHandler(14)
const onClick16 = makeClickHandler(16)

function makeClickHandler(size) {
    return function() {
        document.body.style.fontSize = `${size}px`
    }
}