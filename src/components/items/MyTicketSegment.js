import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Table,
  Button,
  Image
} from "react-bootstrap";
import ModalPayNow from "./ModalPayNow";
class MyTicket extends Component {
  render() {
    return (
      <Col md lg="12">
        <Card>
          <div className="ticket-frame">
            <Row>
              <Col md lg="8">
                <Row>
                  <Col md lg="3">
                    <h3>Argo Wilis</h3>
                    <br />
                    <h6>Eksekutif (P)</h6>
                    <br />
                    <Badge variant="warning">Pending</Badge>
                  </Col>
                  <Col md lg="3">
                    <h3>Argo Wilis</h3>
                    <br />
                    <h6>Eksekutif (P)</h6>
                    <br />
                    <h3>Argo Wilis</h3>
                    <br />
                    <h6>Eksekutif (P)</h6>
                  </Col>
                  <Col md lg="6 ">
                    <h3>Argo Wilis</h3>
                    <br />
                    <h6>Eksekutif (P)</h6>
                    <br />
                    <h3>Argo Wilis</h3>
                    <br />
                    <h6>Eksekutif (P)</h6>
                  </Col>
                </Row>
              </Col>
              <Col md lg="4" className="myticket-title">
                <h3>Train</h3>
                <small>
                  <b>Saturday, February 21 2020</b>
                </small>
              </Col>
              <Col md lg="12">
                <Row>
                  <Col md lg="10">
                    <Table responsive="sm">
                      <thead>
                        <tr>
                          <th>No Identity</th>
                          <th>Name</th>
                          <th>Phone</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>21331981389</td>
                          <td>Joko</td>
                          <td>085777899</td>
                          <td>joko@email.com</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md lg="2">
                    <ModalPayNow />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Card>
      </Col>
    );
  }
}
export default MyTicket;
