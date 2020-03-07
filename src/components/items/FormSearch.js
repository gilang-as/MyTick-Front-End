import React, { Component } from "react";
import { connect } from "react-redux";
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
import moment from "moment";
import { FaExchangeAlt } from "react-icons/fa";
import { actionGetStations } from "../../_actions/Station";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: "1",
      destination: "4",
      date_start: "",
      date_back: "false",
      adult: "1",
      child: "0",
      status_return: false
    };
  }

  componentDidMount = () => {
    this.props.actionGetStations();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  switchlah = () => {
    // console.log(this.state.from, this.state.destination);
    this.setState({
      from: this.state.destination,
      destination: this.state.from
    });
  };

  handleFormSubmit = async e => {
    e.preventDefault();
    // await this.props.actionLogin(this.state);
    console.log(this.state);
  };

  render() {
    const { data: stations } = this.props.station;
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
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Form onSubmit={this.handleFormSubmit}>
                          <Row className="justify-content-md-center">
                            <Col md lg="12">
                              <Row className="justify-content-md-center">
                                <Col xs lg="5">
                                  <Form.Group>
                                    <Form.Label>
                                      <b>From</b>
                                    </Form.Label>
                                    <Form.Control
                                      as="select"
                                      name="from"
                                      id="from"
                                      value={this.state.from}
                                      onChange={this.handleChange}
                                      required
                                    >
                                      {stations.map(function(value, index) {
                                        return (
                                          <option value={value.id} key={index}>
                                            {value.area} ({value.code}) -{" "}
                                            {value.name}
                                          </option>
                                        );
                                      })}
                                    </Form.Control>
                                  </Form.Group>
                                </Col>
                                <Col md lg="2">
                                  <Row className="justify-content-md-center switch-form">
                                    <Button onClick={this.switchlah}>
                                      <FaExchangeAlt />
                                    </Button>
                                  </Row>
                                </Col>
                                <Col xs lg="5">
                                  <Form.Group>
                                    <Form.Label>
                                      <b>To</b>
                                    </Form.Label>
                                    <Form.Control
                                      as="select"
                                      name="destination"
                                      id="destination"
                                      value={this.state.destination}
                                      onChange={this.handleChange}
                                      required
                                    >
                                      {stations.map(function(value, index) {
                                        return (
                                          <option value={value.id} key={index}>
                                            {value.area} ({value.code}) -{" "}
                                            {value.name}
                                          </option>
                                        );
                                      })}
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
                                    id="status_return"
                                    label="Round Trip?"
                                    value={this.state.status_return}
                                    onChange={() =>
                                      this.setState({
                                        status_return: !this.state.status_return
                                      })
                                    }
                                  />
                                </Col>
                                <Col md lg="6">
                                  <Row>
                                    <Col md lg="6">
                                      <Form.Group>
                                        <Form.Label>Departure Date</Form.Label>
                                        <Form.Control
                                          type="date"
                                          placeholder="Date"
                                          name="date_start"
                                          id="date_start"
                                          onChange={this.handleChange}
                                          required
                                        />
                                      </Form.Group>
                                    </Col>
                                    {this.state.status_return ? (
                                      <Col md lg="6">
                                        <Form.Group>
                                          <Form.Label>Return Date</Form.Label>
                                          <Form.Control
                                            type="date"
                                            placeholder="Date"
                                            name="date_back"
                                            id="date_back"
                                            onChange={this.handleChange}
                                            required
                                          />
                                        </Form.Group>
                                      </Col>
                                    ) : (
                                      <Form.Control
                                        type="hidden"
                                        name="date_back"
                                        value="false"
                                      />
                                    )}
                                  </Row>
                                </Col>
                                <Col md lg="6">
                                  <Row>
                                    <Col md lg="4">
                                      <Form.Group>
                                        <Form.Label>Adult</Form.Label>
                                        <Form.Control
                                          type="number"
                                          name="adult"
                                          value={this.state.adult}
                                          onChange={this.handleChange}
                                          required
                                        />
                                      </Form.Group>
                                    </Col>
                                    <Col md lg="4">
                                      <Form.Group>
                                        <Form.Label>Child</Form.Label>
                                        <Form.Control
                                          type="number"
                                          name="child"
                                          value={this.state.child}
                                          onChange={this.handleChange}
                                          required
                                        />
                                      </Form.Group>
                                    </Col>
                                    <Col md lg="4">
                                      <div className="btn-form-search">
                                        <Button type="submit">Search</Button>
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Form>
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
                    <h6>
                      <b>Argo Parahyangan Excellence</b>
                    </h6>
                    <br />
                    Economy (C)
                  </td>
                  <td>
                    <h6>
                      <b>04:00</b>
                    </h6>
                    <br />
                    Bandung
                  </td>
                  <td>
                    <h6>
                      <b>08:00</b>
                    </h6>
                    <br />
                    Jakarta
                  </td>
                  <td>
                    <h6>
                      <b>2h 50m</b>
                    </h6>
                    <br />
                    Direct
                  </td>
                  <td>2st</td>
                  <td>
                    <h6>
                      <b>Rp 400.000,-</b>
                    </h6>
                    <br />
                    <Button>Choose</Button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <h6>
                      <b>Argo Parahyangan Excellence</b>
                    </h6>
                    <br />
                    Economy (C)
                  </td>
                  <td>
                    <h6>
                      <b>04:00</b>
                    </h6>
                    <br />
                    Bandung
                  </td>
                  <td>
                    <h6>
                      <b>08:00</b>
                    </h6>
                    <br />
                    Jakarta
                  </td>
                  <td>
                    <h6>
                      <b>2h 50m</b>
                    </h6>
                    <br />
                    Direct
                  </td>
                  <td>2st</td>
                  <td>
                    <h6>
                      <b>Rp 400.000,-</b>
                    </h6>
                    <br />
                    <Button>Choose</Button>
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

const mapStateToProps = state => {
  return { station: state.station };
};

function mapDispatchToProps(dispatch) {
  return {
    actionGetStations: () => dispatch(actionGetStations())
  };
}

const FormSearch = connect(mapStateToProps, mapDispatchToProps)(Search);

export default FormSearch;
