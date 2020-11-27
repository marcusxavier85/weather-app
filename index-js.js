
fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=755584eeaa5bfb889c6cb5c1cd32aa0a&units=metric').then((data) => {
    return data.json();
}).then((data) => {

    console.log(data);
    console.log(data.list[0].main.temp);
    console.log(data.list[0].weather[0].description);

    function removeItems(data) {
        return data.list.length = 5;
    };
    removeItems(data);

    document.querySelectorAll('.weather').forEach((items) => {
        items.innerHTML = data.list[0].weather[0].description + '<br>' + Math.round(data.list[0].main.temp) + '°C';
        data.list.shift();
    });

})


