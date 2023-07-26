const express = require("express")
const cors = require("cors")
require("dotenv").config()
const data = require("./data/weather.json")
const axios = require("axios")
const app = express()
app.use(cors())


const PORT = process.env.PORT || 8082

console.log("server running")


function filterCities(lat, lon){
    console.log("lat ", lat)
    console.log("lon ", lon)
}

app.get("/", (request, response) => {
    response.status(200).json("Server is running on / " + PORT)
});

app.get("/weather", (request, response)=>{
    let dataToReturn = "";
    console.log(request + "HERE")
    if(request.query.lat && request.query.lon){
        dataToReturn = filterCities(request.query.lat, request.query.lon)
    }
    if(dataToReturn){
        response.status(200).json(dataToReturn)
    } else {
        console.log("Something is wrong with those co-ordinates")
        response.json("no data to be displayed")
        // response.status(400).json("no data to be displayed")
    }
    
})

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`))

