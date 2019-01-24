import React, { Component } from "react";
import "./Weather.css";
import PropTypes from "prop-types";

class Weather extends Component {
  render() {
    const { actualTemp, location, rain, wind } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="weatherCard my-2">
              <div className="currentTemp">
                <span className="temp">{actualTemp}&deg;</span>
                <span className="location">{location}</span>
              </div>
              <div className="currentWeather">
                <span className="conditions">&#xf00d;</span>
                <div className="info">
                  <span className="rain">{rain}</span>
                  <span className="wind">{wind}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Weather.propTypes = {
  actualTemp: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rain: PropTypes.string.isRequired,
  wind: PropTypes.string.isRequired
};

export default Weather;
