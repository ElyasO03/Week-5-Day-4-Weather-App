const cityTextBox = document.getElementById('cityTextBox')
const searchButton = document.getElementById('searchButton')
const minTemp = document.getElementById('minTemp')
const maxTemp = document.getElementById('maxTemp')
const pressure = document.getElementById('pressure')

searchButton.addEventListener('click', function(){

    async function getWeather() {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityTextBox.value}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`
        let response = await fetch(url)
        let weather = await response.json()
        console.log(weather)
        console.log(weather.main.temp)
        
        minTemp.innerHTML = weather.main.temp_min
        maxTemp.innerHTML = weather.main.temp_max
        pressure.innerHTML = weather.main.pressure

    }
    
    getWeather()
})
