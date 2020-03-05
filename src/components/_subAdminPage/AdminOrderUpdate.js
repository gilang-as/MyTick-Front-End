import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { BrowserRouter as Switch, Link } from "react-router-dom";

class AdminOrderUpdate extends Component {
  render() {
    return (
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>
                Order <b>Update</b>
              </h2>
            </div>
            <div className="col-sm-7">
              <Switch></Switch>
              <Link to="/admin/orders" className="btn btn-primary">
                <span>Back</span>
              </Link>
            </div>
          </div>
        </div>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Example multiple select</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="Button">
            <Button type="submit" id="add-form-button">
              Add
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default AdminOrderUpdate;
