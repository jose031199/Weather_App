let weather_map={
    "apikey":"16cbdf800257a35cb24995add578fd99",
    "fetchWeather": function(city){
        fetch(
    "https://api.openweathermap.org/data/2.5/weather?q="
    + city 
    +"&units=metric&appid="
    +this.apikey+""
    ).then((response) => response.json())
    .then((data) => this.displayWeather(data));
    },
    displayWeather:function(data){
        const{name}=data;
        const{description,icon}= data.weather[0];
        const{temp,humidity}= data.main;
        const{speed}= data.wind;
       // console.log(name,description,icon,temp,humidity);

        const ciudad = document.querySelector(".city");
        ciudad.innerHTML="Weather in "+name;

        const imagen = document.querySelector(".icon");
        imagen.src="https://openweathermap.org/img/wn/"+icon+".png";

        const descripcion = document.querySelector(".description");
        descripcion.innerHTML=description;

        const tmp = document.querySelector(".temp");
        tmp.innerHTML=temp+" °C";

        const hum = document.querySelector(".humidity");
        hum.innerHTML="Humidity: "+humidity+" %";

        const wind = document.querySelector(".wind");
        wind.innerHTML="Wind Speed: "+speed+" km/h";
        document.querySelector(".weather").classList.remove("loading");

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')"
    },
    search:function(){
        const buscar_text = document.querySelector(".search-bar");
        this.fetchWeather(buscar_text.value);
    }
};


const buscar_btn = document.querySelector(".search button");

buscar_btn.addEventListener("click",function(){
    weather_map.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        weather_map.search();
    }
});

weather_map.search("Denver");