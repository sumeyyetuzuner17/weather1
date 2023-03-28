import React from "react";
import "./havaDurumu.css";
import { WiHail ,WiSnowWind} from "react-icons/wi";

const HavaDurumu = (props) => {
  const { weather } = props;

  if (!weather) {
    return <p>Lütfen Bekleyin...</p>;
  }

  const icon = weather.weather.map((data) => data.main).join(",");

  console.log("icon: " + icon);

  return (
    <div className="havadurumu">
      
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
        {icon=="Rain" && <h4><WiHail style={{ color: "white" , marginTop:"0px"}} size={70}/></h4>}
        {icon=="Snow" && <h4><WiSnowWind style={{ color: "white" }} size={70}/></h4>}
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
