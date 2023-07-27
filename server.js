const express = require("express")
const cors = require("cors")
require("dotenv").config()
const axios = require("axios")
const app = express()
app.use(cors())


const PORT = process.env.PORT || 8082
const weather = require("./library/weather")

console.log("server running")

app.get("/", (request, response) => {
    response.status(200).json("Server is running on / " + PORT + " This is root")
});

app.get("/weather", weather)

app.listen(PORT, ()=> console.log(`app is running on port ${PORT}`))

