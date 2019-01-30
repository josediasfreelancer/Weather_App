import React, { Component } from "react";
import Weather from "./Weather";
import { Consumer } from "../../Context";

class Weathers extends Component {
  onChangeS = e => {
    this.setState({ name: e.target.value });
    console.log(this.state);
    //item = name.filter(weather => weather.name == "Aveiro");
  };
  // filter(e) {
  //   this.setState({ filter: e.target.value });
  // }
  render() {
    return (
      <Consumer>
        {value => {
          const { weathers } = value;

          return (
            //the info loop
            <React.Fragment>
              {/* <input type="text" onChange={this.onChangeS} /> */}

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
