async function getWeatherData(location) {
    const apiKey = "b591aa6e42bb435a81e50003232509";
    const city = location;
    const days = "3";

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}`);
    const weatherData = await response.json();

    ret = []
    for(let i = 0; i < 3; i++) {
        ret.push([weatherData.forecast.forecastday[i].day.maxtemp_f, weatherData.forecast.forecastday[i].day.mintemp_f, weatherData.forecast.forecastday[i].date])
    }
    
    return ret;
}

getWeatherData("Chandler").then(function(response) {
    console.log(response);
});