import React, { Component } from "react";
import Weather from "./Weather";
import { Consumer } from "../../Context";

class Weathers extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { weathers } = value;
          return (
            //the info loop
            <React.Fragment>
              {weathers.map(weather => (
                <Weather key={weather.id} weather={weather} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Weathers;
