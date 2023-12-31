const data = require("../data/weather.json")

function weather (request, response){
    try{
        let dataToReturn = "";

        function filterCities(lat, lon){
            console.log(lat)
            console.log(lon)
            const searchedCity = data.find((city)=>city.lat == lat && city.lon == lon)
            console.log(searchedCity)
            if(!searchedCity){
                response.json("Sorry no forecast weather found")
            } else{
                response.json(searchedCity.data)
            }
        }

        if(request.query.lat && request.query.lon){
            dataToReturn = filterCities(request.query.lat, request.query.lon)
        }
        if(dataToReturn){
            response.status(200).json(dataToReturn)
        } 
        //else {
        //     console.log("Something is wrong with those co-ordinates")
        //     response.json("no data to be displayed")
        //     // response.status(400).json("no data to be displayed")
        // }
    }catch(error){
        console.log(error)
    }
}

module.exports=weather