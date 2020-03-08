import React, { Component } from "react";
import { connect } from "react-redux";

// import { actionCheckAuth } from "../../_actions/Auth";

import { Button, Modal, Form, Spinner, Row, Col } from "react-bootstrap";

class SearchModal extends Component {
  componentDidMount = () => {
    // this.props.actionCheckAuth();
  };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      login: false
    };
  }

  loginClose = () => {
    this.setState({
      login: false
    });
  };

  loginShow = () => {
    this.setState({
      login: true
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // on form submit...
  handleFormSubmit = async e => {
    e.preventDefault();
    // await this.props.actionLogin(this.state);
  };

  render() {
    const {
      train_name,
      train_category,
      start_time,
      station_start,
      arrived,
      station_destination
    } = this.props.ticket;
    console.log(this.props.ticket);
    // const { loading, message, message_status } = this.props.auth;
    return (
      <>
        <Modal
          show={this.state.login}
          onHide={this.loginClose}
          animation={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            {/* {message ? (
              <Alert variant={message_status}>{message}</Alert>
            ) : (
              <></>
            )} */}
            <Row>
              <Col md lg="4">
                <h1>{train_name}</h1>
                <br />
                {train_category}
              </Col>
              <Col md lg="4">
                <h1>{start_time}</h1>
                <br />
                {station_start}
              </Col>
              <Col md lg="4">
                <h1>{arrived}</h1>
                <br />
                {station_destination}
              </Col>
            </Row>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group className="form-group">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </Form.Group>
              {false ? (
                <Button className="btn btn-primary btn-block" disabled>
                  <Spinner animation="border" size="sm" variant="light" />
                </Button>
              ) : (
                <Button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </Button>
              )}
            </Form>
          </Modal.Body>
          <Button id="btn-false" variant="secondary" onClick={this.loginClose}>
            {" "}
            Close{" "}
          </Button>
        </Modal>
        <Button className="btn btn-primary btn-block" onClick={this.loginShow}>
          Choice
        </Button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    // auth: state.auth
  };
};

function mapDispatchToProps(dispatch) {
  return {
    // actionLogin: data => dispatch(actionLogin(data)),
    // actionCheckAuth: () => dispatch(actionCheckAuth())
  };
}

const FormSearchModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchModal);

export default FormSearchModal;
