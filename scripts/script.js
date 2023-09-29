async function getWeatherData(location) {
    const apiKey = "b591aa6e42bb435a81e50003232509";
    const city = location;
    const days = "3";

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}`);
    const weatherData = await response.json();

    // create the array which holds three days of weather data. format [hightemp, lowtemp, date]
    ret = []
    for(let i = 0; i < 3; i++) {
        ret.push([weatherData.forecast.forecastday[i].day.maxtemp_f, weatherData.forecast.forecastday[i].day.mintemp_f, weatherData.forecast.forecastday[i].date])
    }
    
    return ret;
}

function addDataToDom(dataArray) {
    const day1 = document.querySelector(".one");
    const day2 = document.querySelector(".two");
    const day3 = document.querySelector(".three");
    
    day1.innerHTML = dataArray[0]
    day2.innerHTML = dataArray[1]
    day3.innerHTML = dataArray[2]

}

getWeatherData("Chandler").then(function(response) {
    addDataToDom(response);
});

