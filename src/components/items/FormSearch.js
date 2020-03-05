import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Tab,
  Nav,
  Form,
  Button
} from "react-bootstrap";
import { FaExchangeAlt } from "react-icons/fa";

class FormSearch extends Component {
  render() {
    return (
      <>
        <Container className="home-form-container">
          <Card>
            <Card.Body>
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Economy</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Premium Economy</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row className="justify-content-md-center">
                          <Col md lg="12">
                            <Row className="justify-content-md-center">
                              <Col xs lg="5">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                  <Form.Label>
                                    <b>From</b>
                                  </Form.Label>
                                  <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>
                              <Col md lg="2">
                                <Row className="justify-content-md-center switch-form">
                                  <Button>
                                    <FaExchangeAlt />
                                  </Button>
                                </Row>
                              </Col>
                              <Col xs lg="5">
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                  <Form.Label>
                                    <b>To</b>
                                  </Form.Label>
                                  <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Form.Control>
                                </Form.Group>
                              </Col>
                            </Row>
                          </Col>
                          <Col md lg="12">
                            <Row className="justify-content-md-center">
                              <Col md lg="12">
                                <Form.Check
                                  type="switch"
                                  id="custom-switch"
                                  label="Round Trip?"
                                />
                              </Col>
                              <Col md lg="6">
                                <Row>
                                  <Col md lg="6">
                                    <Form.Group controlId="formBasicEmail">
                                      <Form.Label>Departure Date</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Date"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md lg="6">
                                    <Form.Group controlId="formBasicEmail">
                                      <Form.Label>Return Date</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Date"
                                      />
                                    </Form.Group>
                                  </Col>
                                </Row>
                              </Col>
                              <Col md lg="6">
                                <Row>
                                  <Col md lg="4">
                                    <Form.Group controlId="formBasicEmail">
                                      <Form.Label>Adult</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Date"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md lg="4">
                                    <Form.Group controlId="formBasicEmail">
                                      <Form.Label>Child</Form.Label>
                                      <Form.Control
                                        type="text"
                                        placeholder="Date"
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col md lg="4">
                                    <div className="btn-form-search">
                                      <Button>Search</Button>
                                    </div>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-md-center">
                          <Col xs lg="2">
                            1 of 3
                          </Col>
                          <Col md="auto">Variable width content</Col>
                          <Col xs lg="2">
                            3 of 3
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Container>
        <Container className="searching-home">
          <Card>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Train Name</th>
                  <th>Depart</th>
                  <th>Arrive</th>
                  <th>Duration</th>
                  <th>Transit</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <p>
                      <h6>
                        <b>Argo Parahyangan Excellence</b>
                      </h6>
                    </p>
                    <p>Economy (C)</p>
                  </td>
                  <td>
                    <p>
                      <h6>
                        <b>04:00</b>
                      </h6>
                    </p>
                    <p>Bandung</p>
                  </td>
                  <td>
                    <p>
                      <h6>
                        <b>08:00</b>
                      </h6>
                    </p>
                    <p>Jakarta</p>
                  </td>
                  <td>
                    <p>
                      <h6>
                        <b>2h 50m</b>
                      </h6>
                    </p>
                    <p>Direct</p>
                  </td>
                  <td>2st</td>
                  <td>
                    <p>
                      <h6>
                        <b>Rp 400.000,-</b>
                      </h6>
                    </p>
                    <p>
                      <Button>Choose</Button>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <p>
                      <h6>
                        <b>Argo Parahyangan Excellence</b>
                      </h6>
                    </p>
                    <p>Economy (C)</p>
                  </td>
                  <td>
                    <p>
                      <h6>
                        <b>04:00</b>
                      </h6>
                    </p>
                    <p>Bandung</p>
                  </td>
                  <td>
                    <p>
                      <h6>
                        <b>08:00</b>
                      </h6>
                    </p>
                    <p>Jakarta</p>
                  </td>
                  <td>
                    <p>
                      <h6>
                        <b>2h 50m</b>
                      </h6>
                    </p>
                    <p>Direct</p>
                  </td>
                  <td>2st</td>
                  <td>
                    <p>
                      <h6>
                        <b>Rp 400.000,-</b>
                      </h6>
                    </p>
                    <p>
                      <Button>Choose</Button>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>
        </Container>
      </>
    );
  }
}

export default FormSearch;
