import React, { Component } from "react";
import "./Weather.css";

class Weather extends Component {
  render() {
    const weathers = [
      {
        id: "1",
        location: "Aveiro",
        actualTemp: "23",
        minTemp: "20",
        maxTemp: "25",
        rain: "1.3 MM",
        wind: "10 MPH"
      },
      {
        id: "2",
        location: "Porto",
        actualTemp: "21",
        minTemp: "18",
        maxTemp: "22",
        rain: "2.4 MM",
        wind: "5 MPH"
      }
    ];

    return (
      <div className="container">
        <div className="row">
          {weathers.map(weather => (
            <div className="col-sm" key={weather.id}>
              <div className="weatherCard my-2">
                <div className="currentTemp">
                  <span className="temp">{weather.actualTemp}&deg;</span>
                  <span className="location">{weather.location}</span>
                </div>
                <div className="currentWeather">
                  <span className="conditions">&#xf00d;</span>
                  <div className="info">
                    <span className="rain">{weather.rain}</span>
                    <span className="wind">{weather.wind}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Weather;
