// function getData() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(46)
//         }, 1)
//     })
// }

// async function start() {
//     const result = await getData()
//     console.log(result)
// }

// async function start2() {
//     getData()
//         .then(result => {
//             console.log(result)
//         })
// }

// start()

//-----------------------------------

// async function start() {
//     const data = await fetch('https://api.weather.gov/gridpoints/OKX/35,53/forecast')
//     const result = await data.json()
//     console.log(result.properties.periods[1].shortForecast)
// }

// async function start2() {
//     fetch('https://api.weather.gov/gridpoints/OKX/35,53/forecast')
//         .then(data => data.json())
//         .then(result => {
//             console.log(result.properties.periods[1].shortForecast)
//         })
// }

// start()

//-----------------------------------

// function getData() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             reject('Something went wrong!')
//         }, 1)
//     })
// }

// async function  start() {
//     try {
//         const result = await getData()
//     } catch (error) {
//         console.log(`ERROR: ${error}`)
//     }
// }

// async function start2() {
//     const result = await getData()
//       .catch(error => {
//         console.log(`ERROR: ${error}`)
//       })
// }

// start2()

//-----------------------------------

function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            // resolve('KHERE is your DATA')
            reject('Something went wrong!')
        }, 1)
    })
}

async function start() {
    try {
        const result = await getData()
        // SUCCESS
    } catch (error) {
        // FAILURE
    }
}

start()