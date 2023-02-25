import React, { useState } from "react";

const Weather = () => {
  const API_KEY = "f2b7d9c737cfb0addca181e46a704453";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.name);
        setWeather(`${data.weather[0].main} / ${data.main.temp}℃`);
      });
  };

  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  return (
    <>
      <p>{city}</p>
      <p>{weather}</p>
    </>
  );
};

export default Weather;
