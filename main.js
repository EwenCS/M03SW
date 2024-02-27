var hamburger = document.getElementById("hamburger");
hamburger.addEventListener('click',affichernav);

function affichernav() {
    var nav = document.getElementById('nav');
    nav.style.display='block'; 
}

var fermer = document.getElementById("fermer");
fermer.addEventListener('click',fermernav);

function fermernav() {
    var nav = document.getElementById('nav');
    nav.style.display='none'; 
}


function ajax() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    var reponse=this.responseText;
    console.log(reponse);
    json = JSON.parse(reponse);
    console.log(json.main.temp);
    console.log(json.weather.description);
    document.getElementById("Meteo").innerHTML = json.main.temp + " °C";
    document.getElementById("Meteo2").innerHTML= json.weather[0].description;
    }
    };
    xhttp.open("GET", "https://api.openweathermap.org/data/2.5/weather?lat=48.837631&lon=2.481699&appid=04cf7b991c3d387b0c59bd954cd6c191&units=metric");
    xhttp.send();
   }

 



   // 04cf7b991c3d387b0c59bd954cd6c191