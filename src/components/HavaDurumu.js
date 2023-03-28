import React from "react";
import "./havaDurumu.css";

const HavaDurumu = (props) => {
  const { weather } = props;

  if (!weather) {
    return <p>Lütfen Bekleyin...</p>;
  }    

  return (
    <div className="havadurumu">
      <br />
      <div className="konum">
        <h2>{weather.name}</h2>
      </div>
      <div className="tarih">
        {new Date(weather.dt * 1000).toLocaleDateString()}
      </div>{" "}
      <br />
      <div className="derece">{weather.main.temp}°</div>
      <div className="aciklama">
        <h3>{weather.weather.map((data) => data.description).join(",")}</h3>
      </div>
      <div>
        {console.log(weather.weather.map((data) => data.main).join(","))}
      </div>
      <div className="gorsel">
        <div className="nem">
          Nem <br />
          {weather.main.humidity}{" "}
        </div>
        <div className="rüzgar">
          Rüzgar <br /> {weather.wind.speed}
        </div>
        <div className="basinc">
          Basınç <br />
          {weather.main.pressure}
        </div>
      </div>
    </div>
  );
};

export default HavaDurumu;
