const readLineSync = require('readline-sync');
const axios = require('axios');


let cityName = readLineSync.question("Please provide the name of the City: ")

axios
    .get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=ee4102e4815321c59c6bf45bd915082c`)
    .then((res) => {
        let data = res.data
        let main = res.data.main
        let cityTempMax = parseInt(main.temp_max-273.15) 
        let cityTempMin = parseInt(main.temp_min-273.15)
        let cityHumidity = main.humidity
        let cityName = data.name
        let country = data.sys.country
        
       let CityObj= {
            cityName,
            country,
            cityTempMax,
            cityTempMin,
            cityHumidity
       }
        console.log('CityObj :>> ', CityObj);

    }).catch((err) => {
        throw err
    });