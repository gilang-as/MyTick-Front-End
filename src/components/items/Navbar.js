import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { BrowserRouter as Switch, Link } from "react-router-dom";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-expand-xl navbar-dark">
        <div className="navbar-header d-flex col">
          <Switch></Switch>
          <Link to="/">
            <div className="navbar-brand">
              <i className="fa fa-cube"></i>My<b>tick</b>
            </div>
          </Link>
          <button
            type="button"
            data-target="#navbarCollapse"
            data-toggle="collapse"
            className="navbar-toggle navbar-toggler ml-auto"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div
          id="navbarCollapse"
          className="collapse navbar-collapse justify-content-start"
        >
          <ul className="nav navbar-nav navbar-right ml-auto">
            <LoginModal />
            <RegisterModal />
            <Dropdown className="nav-item dropdown">
              <Dropdown.Toggle
                data-toggle="dropdown"
                id="btn-nav"
                className="nav-link dropdown-toggle user-action"
              >
                <img
                  src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg"
                  className="avatar"
                  alt="Avatar"
                />
                Antonio Moreno <b className="caret"></b>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/my-tickets">
                  <Dropdown.Item href="/my-tickets">My Tickets</Dropdown.Item>
                </Link>
                <Link to="/payment">
                  <Dropdown.Item href="/invoice">Invoice</Dropdown.Item>
                </Link>
                <Link to="/admin">
                  <Dropdown.Item href="/admin">Admin</Dropdown.Item>
                </Link>
                <Dropdown.Item>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
