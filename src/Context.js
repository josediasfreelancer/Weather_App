import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    weathers: [
      //   {
      //     id: "1",
      //     location: "Aveiro",
      //     actualTemp: "23",
      //     // minTemp: "20",
      //     // maxTemp: "25",
      //     rain: "1.3 MM",
      //     wind: "10 MPH"
      //   },
      //   {
      //     id: "2",
      //     location: "Porto",
      //     actualTemp: "21",
      //     // minTemp: "18",
      //     // maxTemp: "22",
      //     rain: "2.4 MM",
      //     wind: "5 MPH"
      //   },
      //   {
      //     id: "3",
      //     location: "Porto",
      //     actualTemp: "21",
      //     // minTemp: "18",
      //     // maxTemp: "22",
      //     rain: "2.4 MM",
      //     wind: "5 MPH"
      //   }
    ]
  };

  //   componentDidMount() {
  //     axios
  //       .get(
  //         "http://api.openweathermap.org/data/2.5/weather?q=Aveiro,PT&appid=1fae0996b68bfb7029e9897875960d42&units=metric"
  //       )
  //       .then(res => {
  //         this.setState({ weathers: res.data.weather });
  //         console.log({ weathers: res.data.weather });
  //       });
  //   }
  componentDidMount() {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/group?id=2742611,2267057,2735943&appid=1fae0996b68bfb7029e9897875960d42&&units=metric"
      )
      .then(res => {
        this.setState({
          weathers: res.data.list,
          details: res.data.list[0].weather
        });
        console.log({ weathers: res.data.list[0].weather });
      });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
