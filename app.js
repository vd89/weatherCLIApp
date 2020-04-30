const readLineSync = require('readline-sync');
const axios = require('axios');

function weatherData() {
  let cName = readLineSync.question('Give the name of the city: ');
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cName}&APPID=ee4102e4815321c59c6bf45bd915082c`,
    )
    .then((res) => {
      const { main, name, sys } = res.data;
      let CityObj = {
        cityName: name,
        country: sys.country,
        cityTempMax: parseInt(main.temp_max - 273.15) + ' C',
        cityTempMin: parseInt(main.temp_min - 273.15) + ' C',
        cityHumidity: main.humidity,
      };
      console.log('CityObj :>> ', CityObj);
      let qusOne = readLineSync.question(`Do you want continue 'yes','no': `);
      if (qusOne === 'y') {
        weatherData();
      } else {
        console.log(`Thanks for using the :thermometer: :thumbsup:`);
      }
    })
    .catch((err) => {
      throw err;
    });
}

weatherData();

// console.log(qusOne);
