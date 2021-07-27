import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("mumbai");
  const [tempInfo, setTempInfo] = useState([]);

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid={Enter your key};
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      const {temp,humidity,pressure} = data.main;
      const { main: weathermood} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country, sunset} = data.sys;

      const myWeatherData = {
          temp,
          humidity,
          pressure,
          name,
          weathermood,
          speed,
          country,
          sunset,
      }
      setTempInfo(myWeatherData);
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <React.Fragment>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* Card */}
      
      <Card tempInfo={tempInfo}/>
    </React.Fragment>
  );
};

export default Temp;
