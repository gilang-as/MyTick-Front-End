import React, { Component } from "react";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./_assets/css/main.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import AdminOrderAdd from "./components/_subAdminPage/AdminOrderAdd";
import AdminOrderUpdate from "./components/_subAdminPage/AdminOrderUpdate";
import AdminTicketsList from "./components/_subAdminPage/AdminTicketsList";
import AdminTicketAdd from "./components/_subAdminPage/AdminTicketAdd";
import AdminTicketUpdate from "./components/_subAdminPage/AdminTicketUpdate";
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
    return (
      <Router>
        <Navbar
          auth={this.props.auth.authStatus}
          profile={this.props.profile.myprofile.myprofile}
        />
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
                    <Link to="/admin/tickets">
                      <Nav.Item className="admin-sidenav-item">
                        <div className="admin-nav-txt">Tickets</div>
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
                      <AdminUserUpdate />
                    </Route>
                    <Route path="/admin/user-add">
                      <AdminUserAdd />
                    </Route>
                    <Route path="/admin/users">
                      <AdminUsersList />
                    </Route>
                    <Route path="/admin/route-update">
                      <AdminRouteUpdate />
                    </Route>
                    <Route path="/admin/route-add">
                      <AdminRouteAdd />
                    </Route>
                    <Route path="/admin/routes">
                      <AdminRoutesList />
                    </Route>
                    <Route path="/admin/train-update">
                      <AdminTrainUpdate />
                    </Route>
                    <Route path="/admin/train-add">
                      <AdminTrainAdd />
                    </Route>
                    <Route path="/admin/trains">
                      <AdminTrainsList />
                    </Route>
                    <Route path="/admin/station-update">
                      <AdminStationUpdate />
                    </Route>
                    <Route path="/admin/station-add">
                      <AdminStationAdd />
                    </Route>
                    <Route path="/admin/stations">
                      <AdminStationsList />
                    </Route>
                    <Route path="/admin/ticket-update">
                      <AdminTicketUpdate />
                    </Route>
                    <Route path="/admin/ticket-add">
                      <AdminTicketAdd />
                    </Route>
                    <Route path="/admin/tickets">
                      <AdminTicketsList />
                    </Route>
                    <Route path="/admin/order-update">
                      <AdminOrderUpdate />
                    </Route>
                    <Route path="/admin/order-add">
                      <AdminOrderAdd />
                    </Route>
                    <Route path="/admin/orders">
                      <AdminOrdersList />
                    </Route>
                    <Route path="/admin">
                      <AdminDashboard />
                    </Route>
                  </Switch>
                </Col>
              </Row>
            </Container>
            {/* <Admin /> */}
          </Route>
          <Route path="/invoice">
            <Invoice />
          </Route>
          <Route path="/my-tickets">
            <MyTicket />
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
