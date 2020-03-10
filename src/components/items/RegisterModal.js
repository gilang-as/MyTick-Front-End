import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      phone: "",
      address: "",
      login: false
    };

    this.loginClose = this.loginClose.bind(this);
    this.loginShow = this.loginShow.bind(this);
  }
  loginClose() {
    this.setState({
      login: false
    });
  }

  loginShow() {
    this.setState({
      login: true
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // on form submit...
  handleFormSubmit(e) {
    e.preventDefault();
    localStorage.setItem("loginForm", JSON.stringify(this.state));
    this.props.history.push("/dashboard");
  }
  render() {
    return (
      <>
        <Modal
          show={this.state.login}
          onHide={this.loginClose}
          animation={false}
        >
          <Modal.Title id="txt-form">
            <h2>Sign Up</h2>
          </Modal.Title>
          <Modal.Body>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group className="form-group">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  className="form-control"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
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
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Gender</Form.Label>
                {/* <Form.Control
                  type="text"
                  name="email"
                  className="form-control"
                  value={this.state.email}
                  onChange={this.handleChange}
                /> */}
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  className="form-control"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  className="form-control"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </Button>
            </Form>
          </Modal.Body>
          <Button id="btn-false" variant="secondary" onClick={this.loginClose}>
            {" "}
            Close{" "}
          </Button>
        </Modal>
        <Button id="btn-nav" onClick={this.loginShow}>
          Sign Up
        </Button>
      </>
    );
  }
}

export default RegisterModal;
