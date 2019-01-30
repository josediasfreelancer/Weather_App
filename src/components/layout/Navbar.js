import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../Context";

class Navbar extends Component {
  onChangeSearch = (dispatch, e) => {
    //console.log(e.target.value);
    dispatch({ type: "SHOW_WEATHER", payload: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
              <div className="container">
                <Link to="/" className="navbar-brand">
                  Weather App
                </Link>

                <div /*className="collapse navbar-collapse"*/ id="navbarMain">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <form className="form-inline my-2 my-lg-0">
                        <input
                          className="form-control mr-sm-2"
                          type="search"
                          placeholder="Search for location"
                          aria-label="Search"
                          onChange={this.onChangeSearch.bind(this, dispatch)}
                        />
                        <button
                          className="btn btn-outline-light my-2 my-sm-0"
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          );
        }}
      </Consumer>
    );
  }
}

export default Navbar;
