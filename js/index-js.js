
fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=755584eeaa5bfb889c6cb5c1cd32aa0a&units=metric').then((data) => {
    return data.json();
}).then((data) => {

    console.log(data);
    console.log(data.list[0].main.temp);
    console.log(data.list[0].weather[0].description);

    function getCurrentDate() {
        let date = new Date();
        let currentDay = date.getDate();
        let currentMonth = date.getMonth() + 1;
        return currentDay + '/' + currentMonth;
    }

    function removeItems(data) {
        return data.list.length = 6;
    }
    removeItems(data);

    document.querySelector('.city').innerHTML = data.city.name;

    document.querySelector(".todays-weather").innerHTML = getCurrentDate() + '<br>'  + data.list[0].weather[0].description + '<br>' + Math.round(data.list[0].main.temp) + '°C';
    data.list.shift();

    let x = 1;
    document.querySelectorAll('.future-date').forEach((date) => {
        if (x <= 6) {
            let futureDate = new Date();
            let getFutureDateMonth = futureDate.getMonth() + 1;
            if (futureDate.getDate() + x <= 31) {
                date.innerHTML = futureDate.getDate() + x + '/' + getFutureDateMonth;
            } else {
                let getNextMonth = getFutureDateMonth + 1;
                date.innerHTML = futureDate.getDate() + x - 31 + '/' + getNextMonth;
            }
            x++;
        }
    })

    document.querySelectorAll('.weather').forEach((items) => {
        items.innerHTML = data.list[0].weather[0].description + '<br>' + Math.round(data.list[0].main.temp) + '°C';
        data.list.shift();
    });
})
