document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search-btn');
    const citySelect = document.querySelector('.city-select');
    const currentWeatherDetails = document.querySelector('.current-weather .details');
    const weatherCards = document.querySelectorAll('.weather-cards .card');

    const sampleData = {
        newyork: {
            current: {
                city: 'New York',
                country: 'US',
                temp: 25,
                wind: 5,
                humidity: 60
            },
            forecast: [
                { day: 'Monday', temp: 22, wind: 4, humidity: 55 },
                { day: 'Tuesday', temp: 23, wind: 3, humidity: 50 },
                { day: 'Wednesday', temp: 24, wind: 6, humidity: 65 },
                { day: 'Thursday', temp: 25, wind: 5, humidity: 60 },
                { day: 'Friday', temp: 26, wind: 4, humidity: 55 }
            ]
        },
        delhi: {
            current: {
                city: 'Delhi',
                country: 'India',
                temp: 30,
                wind: 3,
                humidity: 50
            },
            forecast: [
                { day: 'Monday', temp: 32, wind: 4, humidity: 52 },
                { day: 'Tuesday', temp: 31, wind: 5, humidity: 48 },
                { day: 'Wednesday', temp: 33, wind: 2, humidity: 55 },
                { day: 'Thursday', temp: 34, wind: 3, humidity: 60 },
                { day: 'Friday', temp: 35, wind: 4, humidity: 57 }
            ]
        },
        beijing: {
            current: {
                city: 'Beijing',
                country: 'China',
                temp: 28,
                wind: 4,
                humidity: 65
            },
            forecast: [
                { day: 'Monday', temp: 29, wind: 3, humidity: 60 },
                { day: 'Tuesday', temp: 30, wind: 4, humidity: 58 },
                { day: 'Wednesday', temp: 28, wind: 5, humidity: 63 },
                { day: 'Thursday', temp: 27, wind: 6, humidity: 64 },
                { day: 'Friday', temp: 26, wind: 4, humidity: 62 }
            ]
        },
        sydney: {
            current: {
                city: 'Sydney',
                country: 'Australia',
                temp: 22,
                wind: 7,
                humidity: 70
            },
            forecast: [
                { day: 'Monday', temp: 23, wind: 6, humidity: 68 },
                { day: 'Tuesday', temp: 22, wind: 7, humidity: 69 },
                { day: 'Wednesday', temp: 24, wind: 5, humidity: 65 },
                { day: 'Thursday', temp: 25, wind: 6, humidity: 67 },
                { day: 'Friday', temp: 26, wind: 8, humidity: 66 }
            ]
        }
    };

    const updateCurrentWeather = (data) => {
        currentWeatherDetails.innerHTML = `
            <h2>${data.city} (${data.country})</h2>
            <h6>Temperature: ${data.temp}°C</h6>
            <h6>Wind: ${data.wind} M/S</h6>
            <h6>Humidity: ${data.humidity}%</h6>
        `;
    };

    const updateForecast = (forecast) => {
        weatherCards.forEach((card, index) => {
            card.innerHTML = `
                <h3>${forecast[index].day}</h3>
                <h6>Temp: ${forecast[index].temp}°C</h6>
                <h6>Wind: ${forecast[index].wind} M/S</h6>
                <h6>Humidity: ${forecast[index].humidity}%</h6>
            `;
        });
    };

    searchBtn.addEventListener('click', () => {
        const city = citySelect.value;
        if (city) {
            updateCurrentWeather(sampleData[city].current);
            updateForecast(sampleData[city].forecast);
        }
    });
});
