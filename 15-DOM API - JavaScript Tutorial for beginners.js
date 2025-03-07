// document.onclick = () => {
//     console.log('KHELLO DOM')
// }

// document.body.append('MY NEW THINGY')

// document.body.appendChild('YET ANOTHER THINGY')

// const myHeading = document.createElement('h1')

// document.appendChild(myHeading)

// document.body.appendChild(myHeading)

// myHeading.innerText = 'I AM YOUR HEADER'

// myHeading.innerText = 'Cucumber 🥒'

// const now = new Date()

// myHeading.innerText = `${now.getHours}:${now.getMinutes}`

//-----------------------------

// const input = document.createElement('input')

// input.placeholder = 'TO DO'

// document.body.appendChild(input)

// button.value = 'ADD'

// document.body.appendChild(button)

// button.innerText = 'ADD'

// button.addEventListener('click', () => {
//     const div = document.createElement('div')
//         div.innerText = input.value
//         document.body.appendChild(div)
// })

//-----------------------------

document.body.innerText = ''

const form = document.createElement('form')
document.body.appendChild(form)

const input = document.createElement('input')
input.placeholder = 'TO DO'
form.appendChild(input)

const button = document.createElement('button')
button.innerText = 'ADD'
button.role = 'submit'
form.appendChild(button)

const ul = document.createElement('ul')
document.body.appendChild(el)

const removeElement = el => {
    console.log(el)
}

form.onsubmit = (e) => {
    e.preventDefault()
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerText = input.value
    li.onclick = removeElement.bind(null, li)
    input.value = ''
}

document.body.style.padding = '16px'

input.style.marginRight = '8px'

document.body.style.backgroundColor = 'white'

document.body.attributes

document.body.setAttribute('class', blue)

document.getElementsByClassName('blue')

document.getElementsByTagName('li')

document.querySelector('.blue')

document.querySelectorAll('.blue')

document.querySelectorAll('li')

