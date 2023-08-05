const searchInput = document.querySelector('#search-input');
const search = document.querySelector('#search-form')


const apiKey = '97e80e809f60ac68aefc5b2dbb2deb2f';
let city;



function userSearch(e) {
    e.preventDefault();
    let citySearch = searchInput.value;
    console.log(citySearch);
    findCityWeather(citySearch);

}

function findCityWeather(cityName) {
    let apiCall = `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey};`

    fetch(apiCall)
    .then(function (res) {
      console.log(res.json());
    })
    .catch(function (err) {
      console.error(err);
    });
}

search.addEventListener('submit', userSearch);