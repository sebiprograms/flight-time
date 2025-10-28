import keys from "./keys.json" with { type: 'json'}

let API_KEY = keys.API_KEY

async function flightData() {
    const response = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${API_KEY}`, {mode: 'cors'})
    const data = await response.json()
    console.log(data)
}


flightData()