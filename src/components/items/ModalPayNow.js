import React, { Component } from "react";
import { connect } from "react-redux";

import axios from "axios";

// import { actionCheckAuth } from "../../_actions/Auth";

import { Button, Modal, Form, Spinner, Row, Col } from "react-bootstrap";

class SearchModal extends Component {
  componentDidMount = () => {
    // this.props.actionCheckAuth();
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
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
    this.setState({
      selectedFile: e.target.files[0]
    });
    console.log(e.target.files[0]);
  };

  onClickHandler = () => {
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    axios
      .post("http://localhost:5000/api/v1/payment-upload", data, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => {
        // then print response status
        console.log(res.statusText);
      });
  };

  render() {
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
            <Form>
              <div className="form-group files">
                <label>Upload Your File </label>
                <input
                  type="file"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              {false ? (
                <Button className="btn btn-primary btn-block" disabled>
                  <Spinner animation="border" size="sm" variant="light" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={this.onClickHandler}
                  className="btn btn-primary btn-block"
                >
                  Send
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
          Pay Now
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
