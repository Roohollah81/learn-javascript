document.onclick = () => {
    console.log('KHELLO DOM')
}

document.body.append('MY NEW THINGY')

document.body.appendChild('YET ANOTHER THINGY')

const myHeading = document.createElement('h1')

document.appendChild(myHeading)

document.body.appendChild(myHeading)

myHeading.innerText = 'I AM YOUR HEADER'

myHeading.innerText = 'Cucumber 🥒'

const now = new Date()

myHeading.innerText = `${now.getHours}:${now.getMinutes}`