// function getWeather() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             resolve('Sunny')
//         }, 100)
//     })
// }

// function getWeatherIcon(weather) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             switch(weather) {
//                 case 'Sunny':
//                     resolve('☀️')
//                     break
//                 case 'Cloudy':
//                     resolve('☁️')
//                     break
//                 case 'Rainy':
//                     resolve('🌧️')
//                     break
//                 default:
//                     reject('NO ICON FOUND')
//             }
//         }, 100)
//     })
// }

// function onSuccess(data) {
//     console.log(`Success ${data}`)
// }

// function onError(error) {
//     console.log(`Error: ${error}`)
// }

// getWeather()
//     .then(getWeatherIcon())
//     .then(onSuccess, onError)

//-----------------------------------

// function fun1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('Good data')
//             reject('BAD DATA')
//         }, 100)
//     })
// }

// function fun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('🥸')
//         }, 100)
//     })
// }

// function onSuccess(data) {
//     console.log(`Success: ${data}`)
// }

// function onError(errorCode) {
//     console.log(`ERROR: ${errorCode}`)
// }

// function onFinally() {
//     console.log('FINALLY WE BE DONE YO')
// }

// fun1()
//     .then(fun2)
//     .then(onSuccess)
//     .catch(onError)
//     .finally(onFinally)

//--------------------------

function fetchData() {
    return new Promise(function(resolve,reject) {
        fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
        .then(response => response.json())
        .then(data => resolve(data.properties.periods[1].shortForecast));
    })
}

function displayData(weather) {
    console.log(weather)
}

function onError(err) {
    console.log(`ERROR: ${err}`)
}

fetchData()
    .then(displayData)
    .catch(onError)