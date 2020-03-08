import React, { Component } from "react";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./_assets/css/main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Container, Nav, Col, Row } from "react-bootstrap";

import { actionMyProfile } from "./_actions/Profile";
import { actionCheckAuth } from "./_actions/Auth";

import Navbar from "./components/items/Navbar";
import Footer from "./components/items/Footer";
import Dashboard from "./components/Dashboard";

import MyTicket from "./components/MyTicket";
import Invoice from "./components/Invoice";
import AdminDashboard from "./components/_subAdminPage/AdminDashboard";
import AdminOrdersList from "./components/_subAdminPage/AdminOrdersList";
import AdminStationsList from "./components/_subAdminPage/AdminStationsList";
import AdminStationAdd from "./components/_subAdminPage/AdminStationAdd";
import AdminStationUpdate from "./components/_subAdminPage/AdminStationUpdate";
import AdminTrainsList from "./components/_subAdminPage/AdminTrainsList";
import AdminTrainAdd from "./components/_subAdminPage/AdminTrainAdd";
import AdminTrainUpdate from "./components/_subAdminPage/AdminTrainUpdate";
import AdminRoutesList from "./components/_subAdminPage/AdminRoutesList";
import AdminRouteAdd from "./components/_subAdminPage/AdminRouteAdd";
import AdminRouteUpdate from "./components/_subAdminPage/AdminRouteUpdate";
import AdminUsersList from "./components/_subAdminPage/AdminUsersList";
import AdminUserAdd from "./components/_subAdminPage/AdminUserAdd";
import AdminUserUpdate from "./components/_subAdminPage/AdminUserUpdate";

class Index extends Component {
  componentDidMount = async () => {
    await this.props.actionCheckAuth();
    if (this.props.auth.authStatus) {
      await this.props.actionMyProfile();
    }
    // console.log(this.props.auth.authStatus);
  };
  render() {
    const auth = this.props.auth.authStatus;
    return (
      <Router>
        <Navbar auth={auth} profile={this.props.profile.myprofile.myprofile} />
        <Switch>
          <Route path="/admin">
            <Container className="main-container">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column admin-sidenav">
                    <Link to="/admin">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Dashboard</div>
                      </Nav.Item>
                    </Link>
                    <Link to="/admin/orders">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Orders</div>
                      </Nav.Item>
                    </Link>
                    <Link to="/admin/stations">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Sations</div>
                      </Nav.Item>
                    </Link>
                    <Link to="/admin/trains">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Trains</div>
                      </Nav.Item>
                    </Link>
                    <Link to="/admin/routes">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Routers</div>
                      </Nav.Item>
                    </Link>
                    <Link to="/admin/users">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Users</div>
                      </Nav.Item>
                    </Link>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Switch>
                    <Route path="/admin/user-update">
                      {auth ? <AdminUserUpdate /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/user-add">
                      {auth ? <AdminUserAdd /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/users">
                      {auth ? <AdminUsersList /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/route-update">
                      {auth ? <AdminRouteUpdate /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/route-add">
                      {auth ? <AdminRouteAdd /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/routes">
                      {auth ? <AdminRoutesList /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/train-update">
                      {auth ? <AdminTrainUpdate /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/train-add">
                      {auth ? <AdminTrainAdd /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/trains">
                      {auth ? <AdminTrainsList /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/station-update">
                      {auth ? <AdminStationUpdate /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/station-add">
                      {auth ? <AdminStationAdd /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/stations">
                      {auth ? <AdminStationsList /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin/orders">
                      {auth ? <AdminOrdersList /> : <Redirect to="/" />}
                    </Route>
                    <Route path="/admin">
                      {auth ? <AdminDashboard /> : <Redirect to="/" />}
                    </Route>
                  </Switch>
                </Col>
              </Row>
            </Container>
            {/* <Admin /> */}
          </Route>
          <Route path="/invoice">
            {auth ? <Invoice /> : <Redirect to="/" />}
          </Route>
          <Route path="/my-tickets">
            {auth ? <MyTicket /> : <Redirect to="/" />}
          </Route>
          <Route path="/profile">
            <h3>Profile</h3>
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return { profile: state.profile, auth: state.auth };
};

function mapDispatchToProps(dispatch) {
  return {
    actionMyProfile: () => dispatch(actionMyProfile()),
    actionCheckAuth: () => dispatch(actionCheckAuth())
  };
}

const App = connect(mapStateToProps, mapDispatchToProps)(Index);

export default App;
