import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

class LoginModal extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
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
            <h2>Sign In</h2>
          </Modal.Title>
          <Modal.Body>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group className="form-group">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
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
              <Link to="/dashboard">
                <Button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </Button>
              </Link>
            </Form>
          </Modal.Body>
          <Button id="btn-false" variant="secondary" onClick={this.loginClose}>
            {" "}
            Close{" "}
          </Button>
        </Modal>
        <Button id="btn-nav" onClick={this.loginShow}>
          Sign In
        </Button>
      </>
    );
  }
}

export default LoginModal;
