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
import FormSearchModal from "./FormSearchModal";
import { SetIDR } from "../../helper/Curency";

class Table extends Component {
  render() {
    const tickets = this.props.tickets;
    const adult = this.props.adult;
    const child = this.props.child;
    const date_start = this.props.date_start;
    return (
      <tbody>
        {tickets ? (
          tickets.map(function(value, index) {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>
                  <h6>
                    <b>{value.train_name}</b>
                  </h6>
                  <br />
                  {value.train_category}
                </td>
                <td>
                  <h6>
                    <b>{value.start_time}</b>
                  </h6>
                  <br />
                  {value.station_start}
                </td>
                <td>
                  <h6>
                    <b>{value.arrived}</b>
                  </h6>
                  <br />
                  {value.station_destination}
                </td>
                <td>
                  <h6>
                    <b>aaa</b>
                  </h6>
                  <br />
                  Direct
                </td>
                <td>
                  {value.remaining_seats
                    ? value.remaining_seats
                    : value.train_seats}
                </td>
                <td>
                  <h6>
                    <b>{SetIDR(value.price)}</b>
                  </h6>
                  <br />
                  <FormSearchModal
                    data_ticket={value}
                    adult={adult}
                    child={child}
                    id_ticket={value.id}
                    date_start={date_start}
                  />
                </td>
              </tr>
            );
          })
        ) : (
          <h1>LOADING</h1>
        )}
      </tbody>
    );
  }
}

export default Table;
