import React from "react";
import "./havaDurumu.css";
import { WiHail, WiSnowWind, WiDaySunny } from "react-icons/wi";

const HavaDurumu = (props) => {
  const { weather } = props;

  if (!weather) {
    return <p>Lütfen Bekleyin...</p>;
  }

  const icon = weather.weather.map((data) => data.main).join(",");
  console.log("icon: " + icon);

  const yagmur = "'";
  const kar = "*";

  return (
    <>
      <div className="dunya">
        <div className="dunyaHarita"></div>
      </div>
      <div className="animasyon" id="animasyon"></div>
      <div className="havadurumu">
        <div className="konum">
          <h2>{weather.name}</h2>
        </div>
        <div className="tarih">
          {new Date(weather.dt * 1000).toLocaleDateString()}
        </div>{" "}
        <div className="derece">{weather.main.temp}°</div>
        <div className="aciklama">
          <h3>{weather.weather.map((data) => data.description).join(",")}</h3>
        </div>
        <div className="icon">
          <p id="yagmur">
            {icon == "Rain" && (
              <WiHail style={{ color: "white", marginTop: "0px" }} size={90} />
            )}
          </p>
          <p id="kar">
            {icon == "Snow" && (
              <WiSnowWind style={{ color: "white" }} size={90} />
            )}
          </p>
          {/* <p>
            {icon == "Sun" && (
              <WiDaySunny style={{ color: "white" }} size={90} />
            )}
          </p> */}
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
    </>
  );
};

export default HavaDurumu;
