import React, { useState } from 'react'
import './weatherApp.css';
import search_icon from '../Assets/search1.png';
import wind_icon from '../Assets/icons8-wind-24.png';
import humidity_icon from '../Assets/icons8-humidity-30.png';

const Weather = ({ apiKey }) => {
  const [city, setCity] = useState('');
  const search = async () => {

    if (city === '') {
      return 0;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    const humidity = document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-speed");
    const temperature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-location");
    const weather = document.getElementsByClassName("weather-image");

    if (data.cod === 404) {
      location[0].innerHTML = data.message;
      // return ;
    }
    if (data.cod === 200) {
      humidity[0].innerHTML = data.main.humidity + " %";
      wind[0].innerHTML = data.wind.speed + " Km/h";
      temperature[0].innerHTML = data.main.temp + " °C";
      location[0].innerHTML = data.name;
      weather[0].innerHTML = `<img src="//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`;
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  }

  return (
    <div className='container'>
      <div className="top-bar">
        <form onSubmit={handleSubmit}>
          <input type="text" className="cityinput" placeholder="search by city name" onChange={(e) => setCity(e.target.value)} />
        </form>
        <div className="search-icon" onClick={() => { search() }}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className='weather-image'>
        {/* <img src={} alt="" /> */}
      </div>
      <div className='weather-temp'>24 °C</div>

      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt="" className='icon' />
          <div className='data'>
            <div className='humidity-percent'>64%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt="" className='icon' />
          <div className='data'>
            <div className='wind-speed'>18km/h</div>
            <div className='text'>wind speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather;
