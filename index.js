import {$}from "./dom.js"

var inputext=$("search")
var city= $("city-data")
var maxtemp=$("temperature-max")
var mintemp=$("temperature-min")
var wind=$("wind-data")
var humidity=$("humidity-data")
var temperature=$("temperature")
var container= $("container")
var description=$("description")
// var inputext= document.getElementById("search")
// var city= document.getElementById("city-data")
// var maxtemp=document.getElementById("temperature-max")
// var mintemp=document.getElementById("temperature-min")
// var wind=document.getElementById("wind-data")
// var humidity= document.getElementById("humidity-data")
// var iconloop=document.getElementById("icon")
var ok=true

const APIKEY="5a7999e629e6bc73d72ef6b12cbdfc35"

"use strict"




inputext.addEventListener("keydown",async(e)=>{
    if(e.key==="Enter"){
    
    searchcity()

    }


})

inputext.addEventListener("keydown" ,function(e){
    if(e.key>="0" && e.key<="9"){
        e.preventDefault()
        inputext.style.backgroundColor="red"
    }else{
        inputext.style.backgroundColor=" rgb(143, 25, 108)"
    }
})

inputext.addEventListener("touchstart",(e)=>{
    if(e.key=="Enter"){
        searchcity()
    }
});


inputext.addEventListener("touchstart",(e)=>{
    if(e.key>="0" && e.key<="9"){
          e.preventDefault()
        inputext.style.backgroundColor="red"
    }else{
        inputext.style.backgroundColor=" rgb(143, 25, 108)"
    }
    
});

function writedata(airspeed,maxdeg,mindeg,hum,climatetype,temp ,desc,icon){
wind.innerHTML=airspeed + "km/h"
city.innerHTML=inputext.value.trim()
maxtemp.innerHTML=maxdeg + "°C"
mintemp.innerHTML=mindeg + "°C"
humidity.innerHTML=hum +"%"
temperature.innerHTML=temp + "°C"

var oldcontainer=$("container").children[2]

if(inputext.value===""){
    oldcontainer.remove()
}
if(oldcontainer){
    oldcontainer.remove()
}

var container_climate = document.createElement("div")
container_climate.id="container-climate"
 description=document.createElement("p")
description.id="description"

var imagelist=["images/sunny.gif",
    "images/cloudysun.gif",
    "images/cloudy.gif",
    "images/scatteredclouds.gif",
    "images/cloud.gif",
    "images/drizzle.gif",
    "images/rain.gif",
    "images/thunderstorm.gif",
    "images/snow.gif",
    "images/foggy.gif"
]

const img=document.createElement("img")
img.id="climate"
// img.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
container_climate.appendChild(img)
container_climate.appendChild(description)
container.appendChild(container_climate)
description.innerHTML=desc






// switch(climatetype){
//     case "Rain":
//         img.setAttribute("src",imagelist[0])
//         break
//     case"Clear":
//         img.setAttribute("src",imagelist[1])
//         break  
        
//     case "Clouds":
//         img.setAttribute("src",imagelist[2])
//         break    
//     case "Thunderstorm":
//         img.setAttribute("src",imagelist[3])
//         break  
        
//     case "Snow":
//         img.setAttribute("src",imagelist[4])
//         break  
        
//     case "Drizzle":
//         img.setAttribute("src",imagelist[5])    
//         break
//     case "Fog":
//         img.setAttribute("src",imagelist[6])    
//     }


switch(desc){
    case "cielo claro":
        img.setAttribute("src",imagelist[0])
        break
    case"algo de nubes":
        img.setAttribute("src",imagelist[1])
        break  
        
    case "muy nuboso":
        img.setAttribute("src",imagelist[2])
        break    
    
    case "nubes dispersas":
        img.setAttribute("src",imagelist[3])
        break    
    
    case "nubes":
        img.setAttribute("src",imagelist[4])
        break  
        
    case "lluvia ligera":
        img.setAttribute("src",imagelist[5])
        break       
    case "lluvia":
        img.setAttribute("src",imagelist[6])    
        break
    case "tormenta":
        img.setAttribute("src",imagelist[7])  
        break
    case "nieve":
        img.setAttribute("src",imagelist[8])
        break
    case "niebla": 
        img.setAttribute("src",imagelist[9])
        break
    }

}



async function searchcity(){


    var city= inputext.value.trim()

    var response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=es`)


    try{

    if(!response.ok){
        throw new Error("City not found")
    }

    const citydata= await response.json()

    var airspeed=citydata.wind.speed
    var maxdeg= citydata.main.temp_max
    var mindeg= citydata.main.temp_min
    var hum=citydata.main.humidity
    var climatetype=citydata.weather[0].main
    var temp= citydata.main.temp
    var desc=citydata.weather[0].description
    var iconweather= citydata.weather[0].icon
    writedata(airspeed , maxdeg ,mindeg ,hum , climatetype, temp , desc,iconweather)
    }catch(error){

    alert(error)
    }
}
