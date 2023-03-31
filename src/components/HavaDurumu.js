import React from "react";
import "./havaDurumu.css";
import {
  WiHail,
  WiSnowWind,
  WiDaySunny,
  WiDayCloudyHigh,
  WiNightThunderstorm,
} from "react-icons/wi";
import Arama from "../components/Arama/Arama";
import Sonuc from "../components/Sonuc/Sonuc";

const HavaDurumu = ({ weather, data_, setData_ }) => {
  // const { weather } = props;

  if (!weather) {
    return <p>Lütfen Bekleyin...</p>;
  }

  const icon = weather.weather.map((data) => data.main).join(",");
  console.log("icon: ", data_);

  return (
    <>
      {/* <div className="dunya">
        <div className="dunyaHarita"></div>
      </div>
      <div className="animasyon" id="animasyon">{yagmur}</div> */}

      <div className="havadurumu">
        <div className="ikili_flex">
          <div>
            <div className="konum">
              <h2>{weather.name.toUpperCase()}</h2>
            </div>
            <div className="tarih">
              {new Date(weather.dt * 1000).toLocaleDateString()}
            </div>
            <br />
            <div className="derece">{weather.main.temp.toFixed(0)}°</div>
          </div>
          <div className="aciklama">
            <h3>{weather.weather.map((data) => data.description).join(",")}</h3>
          </div>
        </div>

        <div className="icon">
          <p id="yagmur" className="rain">
            {icon === "Rain" && (
              <WiHail style={{ color: "white", marginTop: "0px" }} size={90} />
            )}
          </p>
          <p>
            {icon === "Drizzle" && (
              <WiHail style={{ color: "white" }} size={90} />
            )}
          </p>
          <p id="kar">
            {icon === "Snow" && (
              <WiSnowWind style={{ color: "white" }} size={90} />
            )}
          </p>
          <p>
            {icon === "Clouds" && (
              <WiDayCloudyHigh style={{ color: "white" }} size={90} />
            )}
          </p>
          <p>
            {icon === "Clear" && (
              <WiDaySunny style={{ color: "white" }} size={90} />
            )}
          </p>
          <p>
            {icon === "Thunderstorm" && (
              <WiNightThunderstorm style={{ color: "white" }} size={90} />
            )}
          </p>
        </div>
        <div className="gorsel">
          <div className="nem">
            {weather.main.humidity}% <br /> Nem
          </div>
          <div className="rüzgar">
            {weather.wind.speed}km
            <br />
            Rüzgar
          </div>
          <div className="basinc">
            {" "}
            {weather.main.pressure}
            <br />
            Basınç
          </div>
        </div>
        {/* <Arama data_={data_} setData_={setData_} />
        <Sonuc data_={data_} /> */}
      </div>
    </>
  );
};

export default HavaDurumu;
