import React, {useEffect} from "react";

const Card = ({ tempInfo }) => {
  const {
    temp,
    humidity,
    pressure,
    name,
    weathermood,
    speed,
    country,
    sunset,
  } = tempInfo;
  const [weatherState, setWeatheState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
          case "Rain":
          setWeatheState("wi-day-rain");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);
    // converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <React.Fragment>
    <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name} , {country}</div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        {/* our for colom section */}
        <div className="extra-temp">
        <div className="temp-info-minmax">
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-sunset"}></i>
            </p>
            <p className="extra-info-leftside">
              {timeStr } <br /> Sunset
            </p>
          </div>

          <div className="two-sided-section">
            <p>
              <i className={"wi wi-humidity"}></i>
            </p>
            <p className="extra-info-leftside">
              {humidity} <br /> Humidity
            </p>
          </div>
        </div>

        <div className="weather-extra-info">
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-rain"}></i>
            </p>
            <p className="extra-info-leftside">
              {pressure}
              <br /> Pressure
            </p>
          </div>
          <div className="two-sided-section">
            <p>
              <i className={"wi wi-strong-wind"}></i>
            </p>
            <p className="extra-info-leftside">
              {speed}
              <br /> Speed
            </p>
          </div>
        </div>
      </div>
      </article>
      
    </React.Fragment>
  );
};

export default Card;
