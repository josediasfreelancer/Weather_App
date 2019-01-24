import React, { Component } from "react";
import Weather from "./Weather";

class Weathers extends Component {
  state = {
    weathers: [
      {
        id: "1",
        location: "Aveiro",
        actualTemp: "23",
        // minTemp: "20",
        // maxTemp: "25",
        rain: "1.3 MM",
        wind: "10 MPH"
      },
      {
        id: "2",
        location: "Porto",
        actualTemp: "21",
        // minTemp: "18",
        // maxTemp: "22",
        rain: "2.4 MM",
        wind: "5 MPH"
      }
    ]
  };

  render() {
    const { weathers } = this.state;
    return (
      <div>
        {weathers.map(weather => (
          <Weather
            key={weather.id}
            location={weather.location}
            actualTemp={weather.actualTemp}
            rain={weather.rain}
            wind={weather.wind}
          />
        ))}
      </div>
    );
  }
}

export default Weathers;
