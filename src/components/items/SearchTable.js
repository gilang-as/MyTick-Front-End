import React, { Component } from "react";
import { connect } from "react-redux";

import { actionCheckAuth } from "../../_actions/Auth";
import { Button } from "react-bootstrap";
import FormSearchModal from "./FormSearchModal";
import { SetIDR } from "../../helper/Curency";

class Table extends Component {
  componentDidMount = () => {
    this.props.actionCheckAuth();
  };
  render() {
    const tickets = this.props.tickets;
    const adult = this.props.adult;
    const child = this.props.child;
    const date_start = this.props.date_start;
    const auth = this.props.auth;
    return (
      <tbody>
        {tickets ? (
          tickets.map(function(value, index) {
            return (
              <tr key={index}>
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
                  {value.remaining_seats
                    ? value.remaining_seats
                    : value.train_seats}
                </td>
                <td>
                  <h6>
                    <b>{SetIDR(value.price)}</b>
                  </h6>
                  <br />
                  {auth ? (
                    <FormSearchModal
                      data_ticket={value}
                      adult={adult}
                      child={child}
                      id_ticket={value.id}
                      date_start={date_start}
                    />
                  ) : (
                    <></>
                  )}
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

const mapStateToProps = state => {
  return { auth: state.auth };
};

function mapDispatchToProps(dispatch) {
  return {
    actionCheckAuth: () => dispatch(actionCheckAuth())
  };
}

const SearchTable = connect(mapStateToProps, mapDispatchToProps)(Table);

export default SearchTable;
