import React, { Component } from "react";
import { connect } from "react-redux";

import { Dropdown } from "react-bootstrap";
import { BrowserRouter as Switch, Link } from "react-router-dom";

import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", level: "" };
  }
  componentDidMount = async () => {};
  render() {
    const auth = this.props.auth;
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
            {auth ? (
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
                  {this.props.profile.myprofile ? (
                    <>{this.props.profile.myprofile.data.name}</>
                  ) : (
                    <>Loading</>
                  )}
                  <b className="caret"></b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <>
                    <Link to="/my-tickets" className="dropdown-item">
                      My Tickets
                    </Link>
                    <Link to="/invoice" className="dropdown-item">
                      Invoice
                    </Link>
                    <Link to="/admin" className="dropdown-item">
                      Admin
                    </Link>
                    <Dropdown.Item>Sign Out</Dropdown.Item>
                  </>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <LoginModal />
                <RegisterModal />
              </>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return { profile: state.profile };
};

function mapDispatchToProps(dispatch) {
  return {
    // actionMyProfile: () => dispatch(actionMyProfile())
  };
}

const Navbar = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default Navbar;
