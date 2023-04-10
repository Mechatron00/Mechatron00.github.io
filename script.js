var input=document.querySelector("#inp");
var btn=document.querySelector("#btn");
var ctry=document.querySelector("#country");
var ct=document.querySelector("#city");
var temper=document.querySelector("#temper");
var descptn=document.querySelector("#descri");
var tmin=document.querySelector("#tmin");
var tmax=document.querySelector("#tmax");
var pressr=document.querySelector("#pressr");
var humidt=document.querySelector("#humidt");
var windspd=document.querySelector("#windspd");
const apikey="1c42635865be39a7e6e52078c9ffa124";

// kelvin to celcius
function conversion(kelvin)
{
  return (kelvin-273).toFixed(2)
}

// m/s to kmph
function mpsTokmph(ms)
{
  return (ms*(8/5)).toFixed(2);
}


// event listner on button click
btn.addEventListener("click",function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+apikey)//fetch and promise
  .then(res => res.json())
    // .then(data=>console.log(data))//testing response from api
  .then(data=>
    {
      let countryname=data.sys.country
      let city=data.name
      let temperature=data.main.temp
      let descr=data['weather']['0']['description']
      let mintemp=data.main.temp_min
      let maxtemp=data.main.temp_max
      let press=data.main.pressure
      let humid=data.main.humidity
      let wspeed=data.wind.speed

      // console.log(countryname,city,temperature,descr,mintemp,maxtemp,press,humid,wspeed)//testing data needed
      
      ct.innerHTML=`City: ${city}, ${countryname}.`
      descptn.innerHTML=`Description: ${descr}.`
      temper.innerHTML=`Temperature: ${conversion(temperature)}  <sup>o</sup>C.`
      
      //  tmin.innerHTML=`Minimum Temp: ${conversion(mintemp)} <sup>o</sup>C.`
      //  tmax.innerHTML=`Maximum Temp: ${conversion(maxtemp)} <sup>o</sup>C.`

      pressr.innerHTML=`Pressure: ${press} hpa.`
      humidt.innerHTML=`Humidity: ${humid}%.`
      windspd.innerHTML=`Wind Speed: ${ mpsTokmph(wspeed)} Km/hr.`
      
      })


  .catch(err=>alert("Enter correct city "))

})



//properties needed
//decription
//temp
//temp min
//temp max
//pressure
//humidity
//wind speed
//country
//sunrise
//sunset
//name
//Created by:Dinesh Dixit
//  Github: https://github.com/Mechatron00