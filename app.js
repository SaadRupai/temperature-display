document.getElementById('button').addEventListener('click', function () {
    const cityName = document.getElementById('city-name').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=8f2d764807e5a624e719f79a76e148f8')
        .then(res => res.json())
        .then(data => {
            const cityNameDisplay = data.name;
            const tempDisplayK = data.main.temp;
            const tempDisplayC = (tempDisplayK - 273).toFixed(2);
            const descriptionDisplay = data.weather[0].description;

            document.getElementById('city-name-display').innerText = cityNameDisplay;
            document.getElementById('temp-display').innerText = tempDisplayC;
            document.getElementById('description-display').innerText = descriptionDisplay;
            
        })
        .catch(error => alert('Wrong City Name !'));
})