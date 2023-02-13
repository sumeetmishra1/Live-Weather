const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4a06c9154cmshfead40542c09f90p1c9965jsn94464d49293d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather=(city)=>{
    cityName.innerHTML=city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then((response) => {  
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

}  
submit.addEventListener("click", (e)=>{
   e.preventDefault()
    getweather(city.value)
})
getweather("Delhi")
const getweather1=()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gorakhpur', options)
    .then(response => response.json())
    .then((response) => {  
        console.log(response)
       cp1.innerHTML = response.cloud_pct
        cp2.innerHTML = response.humidity
        cp3.innerHTML = response.max_temp
        cp4.innerHTML = response.min_temp
        cp5.innerHTML = response.sunrise
        cp6.innerHTML = response.sunset
        cp7.innerHTML = response.temp
       cp8.innerHTML = response.wind_degrees
        cp9.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));

}  
getweather1()
const getweather2=()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then((response) => {  
        console.log(response)
       dp1.innerHTML = response.cloud_pct
        dp2.innerHTML = response.humidity
        dp3.innerHTML = response.max_temp
        dp4.innerHTML = response.min_temp
        dp5.innerHTML = response.sunrise
        dp6.innerHTML = response.sunset
        dp7.innerHTML = response.temp
        dp8.innerHTML = response.wind_degrees
        dp9.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));

}  
getweather2()
const getweather3=()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
    .then(response => response.json())
    .then((response) => {  
        console.log(response)
       ep1.innerHTML = response.cloud_pct
        ep2.innerHTML = response.humidity
        ep3.innerHTML = response.max_temp
        ep4.innerHTML = response.min_temp
        ep5.innerHTML = response.sunrise
        ep6.innerHTML = response.sunset
        ep7.innerHTML = response.temp
        ep8.innerHTML = response.wind_degrees
        ep9.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));

}  
getweather3()
const getweather4=()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kanpur', options)
    .then(response => response.json())
    .then((response) => {  
        console.log(response)
       fp1.innerHTML = response.cloud_pct
       fp2.innerHTML = response.humidity
        fp3.innerHTML = response.max_temp
        fp4.innerHTML = response.min_temp
        fp5.innerHTML = response.sunrise
        fp6.innerHTML = response.sunset
        fp7.innerHTML = response.temp
        fp8.innerHTML = response.wind_degrees
        fp9.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));

}  
getweather4()
const getweather5=()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Varanasi', options)
    .then(response => response.json())
    .then((response) => {  
        console.log(response)
       gp1.innerHTML = response.cloud_pct
       gp2.innerHTML = response.humidity
        gp3.innerHTML = response.max_temp
        gp4.innerHTML = response.min_temp
        gp5.innerHTML = response.sunrise
        gp6.innerHTML = response.sunset
        gp7.innerHTML = response.temp
        gp8.innerHTML = response.wind_degrees
        gp9.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));

}  
getweather5()
const getweather6=()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nainital', options)
    .then(response => response.json())
    .then((response) => {  
        console.log(response)
       hp1.innerHTML = response.cloud_pct
       hp2.innerHTML = response.humidity
        hp3.innerHTML = response.max_temp
        hp4.innerHTML = response.min_temp
        hp5.innerHTML = response.sunrise
        hp6.innerHTML = response.sunset
        hp7.innerHTML = response.temp
        hp8.innerHTML = response.wind_degrees
        hp9.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));

}  
getweather6()
