const weather = {
    apiKey: "3c820dd7a56ddc12b2ac68abd3788ef4",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0]
        const { temp, humidity } = data.main
        const { speed } = data.wind
        document.getElementById('name').textContent = `Weather in ${name}`
        document.getElementById('icon').src =
        "https://openweathermap.org/img/wn/" + icon + ".png"
        document.getElementById('description').textContent = description
        document.getElementById('degrees').textContent = `Temperature in ${name} is ${temp} °C`
        document.getElementById('humidity').textContent = `Humidity is ${humidity}%`
        document.getElementById('wind').textContent = `Wind speed is ${speed} km/h`
    },
    searchWeather: function(){
        this.fetchWeather(document.getElementById('city').value)
    }
}
document.getElementById('btn').addEventListener('click', function(e){
    e.preventDefault()
    weather.searchWeather()
})
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault()
    weather.searchWeather()
})
