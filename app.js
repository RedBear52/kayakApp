const displayData = (eminenceData, troyData, irontonData) => {
    document.getElementById('eminence').innerHTML = `<strong>Eminence, MO</strong> <br> 
    <br> <strong>Today's Weather:</strong> <br>
    ${JSON.stringify(eminenceData.properties.periods[0].detailedForecast)}  
    <br> <strong>Tonight's Weather:</strong> <br>
    ${JSON.stringify(eminenceData.properties.periods[1].detailedForecast)} <br>` 
    document.getElementById('troy').innerHTML = `<strong>Troy, MO</strong> <br> 
    <br> ${JSON.stringify(troyData.properties.periods[0].detailedForecast)} <br>` 
    document.getElementById('ironton').innerHTML = `<br> <strong>Ironton, MO Weather Summary:</strong> <br> 
    <br> ${JSON.stringify(irontonData.properties.periods[0].detailedForecast)}` 
}

const fetchWeatherData = async () => {
    try {
        const eminence = await fetch(`https://api.weather.gov/gridpoints/SGF/135,33/forecast`)
        const eminenceData = await eminence.json()
        const troy = await fetch(`https://api.weather.gov/gridpoints/LSX/67,88/forecast`)
        const troyData = await troy.json()
        const ironton = await fetch(`https://api.weather.gov/gridpoints/LSX/81,26/forecast`)
        const irontonData = await ironton.json()
        console.log(troyData)
        return displayData(eminenceData, troyData, irontonData)
    } catch (error) {
        console.log(error)
    } 
}

const button = document.getElementById('big_btn')
button.addEventListener('click', function() {
    fetchWeatherData()
});

