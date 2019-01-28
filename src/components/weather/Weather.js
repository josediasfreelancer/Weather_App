import React, { Component } from "react";
import "./Weather.css";
import PropTypes from "prop-types";
//import Weathers from "./Weathers";

class Weather extends Component {
  render() {
    //properties for parameter values in state
    const { main, name, wind, weather } = this.props.weather;
    return (
      <div className="col-sm">
        <div className="weatherCard my-2">
          <div className="currentTemp">
            <span className="temp">{main.temp}&deg;</span>
            <span className="location">{name} </span>
          </div>
          <div className="currentWeather">
            <span className="conditions">
              <img
                className="imageicon"
                src={`http://openweathermap.org/img/w/${weather[0].icon}.png`}
                alt="weather img"
              />
              {/* &#xf03d;{`&#xf${weather[0].icon};`} */}
            </span>
            <div className="info">
              <span className="humidity"> {main.humidity} %</span>
              <span className="wind">{`${wind.speed} MPH`}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  weather: PropTypes.object.isRequired
};

export default Weather;
