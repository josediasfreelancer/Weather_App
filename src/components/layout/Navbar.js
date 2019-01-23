import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
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
  }
}

export default Navbar;
