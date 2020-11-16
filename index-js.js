
fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=755584eeaa5bfb889c6cb5c1cd32aa0a&units=metric').then((data) => {
    return data.json();
}).then((data) => {
    console.log(data);
    console.log(data.list[0].main.temp);
    console.log(data.list[0].weather[0].description);
    let weather = data.list[0].weather[0].description;
    let temperature = data.list[0].main.temp;
    let weatherOne = data.list[1].weather[0].description;
    let temperatureOne = data.list[1].main.temp;
    let weatherTwo = data.list[2].weather[0].description;
    let temperatureTwo = data.list[2].main.temp;
    let weatherThree = data.list[3].weather[0].description;
    let temperatureThree = data.list[3].main.temp;
    let weatherFour = data.list[4].weather[0].description;
    let temperatureFour = data.list[4].main.temp;
    document.querySelector('.monday-weather').textContent = `${weather} Temp: ${temperature}`;
    document.querySelector('.tuesday-weather').textContent = `${weatherOne} Temp: ${temperatureOne}`;
    document.querySelector('.wednesday-weather').textContent = `${weatherTwo} Temp: ${temperatureTwo}`;
    document.querySelector('.thursday-weather').textContent = `${weatherThree} Temp: ${temperatureThree}`;
    document.querySelector('.friday-weather').textContent = `${weatherFour} Temp: ${temperatureFour}`;
})

data.forEach()

