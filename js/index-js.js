
fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=755584eeaa5bfb889c6cb5c1cd32aa0a&units=metric').then((data) => {
    return data.json();
}).then((data) => {

    console.log(data);
    console.log(data.list[0].main.temp);
    console.log(data.list[0].weather[0].main);
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


    function getWeatherIcon() {
        if (data.list[0].weather[0].description === 'thunderstorm') {
            return '<i class="wi wi-thunderstorm"></i>';
        } else if (data.list[0].weather[0].description === 'rain') {
            return '<i class="wi wi-rain"></i>';
        } else if (data.list[0].weather[0].description === 'shower rain') {
            return '<i class="wi wi-showers"></i>';
        } else if (data.list[0].weather[0].description === 'snow') {
            return '<i class="wi wi-snow"></i>';
        } else if (data.list[0].weather[0].description === 'clear sky') {
            return '<i class="wi wi-day-sunny"></i>';
        } else if (data.list[0].weather[0].description === 'few clouds') {
            return '<i class="wi wi-cloudy"></i>';
        } else if (data.list[0].weather[0].description === 'scattered clouds') {
            return '<i class="wi wi-cloudy"></i>';
        } else if (data.list[0].weather[0].description === 'few clouds') {
            return '<i class="wi wi-cloudy"></i>';
        } else {
            return '<p>HEY HEY HEY</p>';
        }
    }


    document.querySelector(".todays-weather-info").innerHTML = getCurrentDate() + '<br>'  + data.list[0].weather[0].description + '<br>' + Math.round(data.list[0].main.temp) + '°C';
    document.querySelector('.todays-weather-icon').innerHTML = getWeatherIcon();
    data.list.shift();

    let x = 1;
    document.querySelectorAll('.future-date').forEach((date) => {
        if (x <= 6) {
            let futureDate = new Date();
            let getFutureDateMonth = futureDate.getMonth() + 1;
            if (futureDate.getDate() + x <= 31) {
                if (futureDate.getDate() + x < 10) {
                    let lowerDateNumber = '0' + futureDate.getDate() + x;
                    date.innerHTML = lowerDateNumber + '/' + getFutureDateMonth;
                }
                date.innerHTML = futureDate.getDate() + x + '/' + getFutureDateMonth;
            } else {
                let getNextMonth = getFutureDateMonth + 1;
                if (getNextMonth > 12) {
                   let nextYearNewMonth = getNextMonth - 12;
                   date.innerHTML = futureDate.getDate() + x - 31 + '/' + nextYearNewMonth;
                } else {
                    date.innerHTML = futureDate.getDate() + x - 31 + '/' + getNextMonth;
                }

            }
            x++;
        }
    })

    document.querySelectorAll('.future-weather').forEach((items) => {
        items.innerHTML = '<p>' + data.list[0].weather[0].description +'</p>' + '<p>' + Math.round(data.list[0].main.temp) + '°C' + '</p>' + getWeatherIcon();
        data.list.shift();
    });
})
