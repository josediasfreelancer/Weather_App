import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_WEATHER":
      return {
        ...state,
        weathers: state.weathers.filter(
          weather => weather.id !== action.payload
        )
      };
    case "SHOW_WEATHER":
      return {
        ...state,
        weathers: state.weathers.filter(
          weather => weather.name.toLowerCase() === action.payload,
          console.log(action.payload)
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    weathers: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
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
          weathers: res.data.list
        });
        //console.log({ weathers: res.data.list[0].weather[0].icon });
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
