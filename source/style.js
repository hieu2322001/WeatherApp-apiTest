var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.shortDesc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var value = document.querySelector('.value');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changeWeatherUI(capitalSearch) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=a01dd1b19d3edcaa3b6d064c933e982a`

    let data = await fetch(apiURL).then(res => res.json());
    console.log(data);
    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp =  Math.round(data.main.temp - 273.15)
        value.innerText = temp
        //shortDesc.innerText = data.weather
        
        time.innerText = new Date().toLocaleString('vi');

        
        if(temp<=25) {
            body.setAttribute('class', 'thu')
        }
        if(temp<=22) {
            body.setAttribute('class', 'xuan')
        } 
        if(temp<=19) {
            body.setAttribute('class', 'dong')
        }
        else{
            body.setAttribute('class', 'ha')
        } 
            
    } else {
        content.classList.add('hide')
    }
}


search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch);
    }
})
changeWeatherUI('Ha Noi');