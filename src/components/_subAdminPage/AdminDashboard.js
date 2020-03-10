import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

class AdminDashboard extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md lg="12">
            <Card>
              <Container className="text-center">
                <h2>Welcome Admin</h2>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AdminDashboard;
