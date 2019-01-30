import React, { Component } from "react";
import "./Weather.css";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";

class Weather extends Component {
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_WEATHER", payload: id });
  };

  render() {
    //properties for parameter values in state
    const { id, main, name, wind, weather } = this.props.weather;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="col-sm">
              <div className="weatherCard my-2">
                <div className="currentTemp">
                  <span className="temp">{main.temp}&deg;</span>
                  <span className="location">{name} </span>
                </div>
                <div className="currentWeather">
                  <i
                    className="fas fa-times pr-1 pt-1"
                    style={{ cursor: "pointer", float: "right", color: "red" }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  />
                  <span className="conditions">
                    <img
                      className="imageicon"
                      src={`http://openweathermap.org/img/w/${
                        weather[0].icon
                      }.png`}
                      alt="weather img"
                    />
                  </span>
                  <div className="info">
                    <span className="humidity"> {main.humidity} %</span>
                    <span className="wind">{`${wind.speed} MPH`}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Weather.propTypes = {
  weather: PropTypes.object.isRequired
};

export default Weather;
