import keys from "./keys.json" with { type: 'json'}

let API_KEY = keys.API_KEY

async function flightData() {
    const response = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${API_KEY}`, {mode: 'cors'})
    const data = await response.json()
    console.log(data)
    return data
}

function displayFlightData(data) {
    let p = document.createElement('p')
    p.textContent = data
}

let data = flightData()
flightData()

var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);