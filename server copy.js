const express = require("express")
const cors = require("cors")
require("dotenv").config()
const data = require("./data/weather.json")
const axios = require("axios")
const app = express()
app.use(cors())


const PORT = process.env.PORT || 8082

console.log("server running")

// function filterCities(searchQuery){
//     console.log(searchQuery)
//     console.log(data[0].city_name)
//     // const result = data.find((city) => data[0].city_name == searchQuery)
//     const cityWithWeather = res.data.results.map((city)=>{
//         return{
//             city:city_name
//         }
//     })
//     console.log(cityWithWeather)
//     return cityWithWeather;
// }

// app.get("/", (request, response) => {
//     response.json("CITY EXPLORER");
//     console.log("City Explorere")
//     let dataToReturn = data

//     if (request.query.city_name){
//         dataToReturn = filterCities(searchQuery, lat, lon)
//     }
//     response.json(dataToReturn)
// });

app.get("/weather", async(request, response)=>{
    console.log("Server")
    // const API = `http://localhost:60244/weather`
    const API = `http://localhost:60244/weather?query=seattle`
    // const API = `http://localhost:60244/weather?city=${searchQuery}&lat=${lat}&lon=${lon}`
    // const res = await axios.get(API)
    // console.log(res.data)
    let weatherToReturn = data

    
    // response.status(200).json(data)
    // response.json(res.data)
    // response.json("STUFF")
    response.json(weatherToReturn)
})

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`))

