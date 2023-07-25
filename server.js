const express = require("express")
const cors = require("cors")
require("dotenv").config()
const data = require("./data/weather.json")
const app = express()
app.use(cors())


const PORT = process.env.PORT || 8082

console.log("server running")

app.get("/weather",(request, response)=>{
    console.log("Server")
    response.json("Hello")
    // response.status(400)
})

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`))

