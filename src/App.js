//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

import axios from "axios";
import { useEffect, useState } from "react";
import { usePosition } from "use-position";
import "./App.css";
import HavaDurumu from "./components/HavaDurumu";

function App() {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const getWeatherData = async (enlem, boylam) => {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    const dil = navigator.language.split("-")[0];

    console.log(dil)
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${enlem}&lon=${boylam}&appid=c544de50d68a25ff466bd1b84a4a8604&lang=${dil}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("Hatalı veri girişi yapıldı.");
    }
  };

  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);

  console.log("Buradayım" + latitude, longitude, weather);

  return (
    <div className="App">    
      <HavaDurumu weather={weather} />
    </div>
  );
}

export default App;
