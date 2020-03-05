import React, { Component } from "react";
import { BrowserRouter as Switch, Link } from "react-router-dom";

import { Button } from "react-bootstrap";
class AdminUsersList extends Component {
  render() {
    return (
      <div className="table-wrapper">
        <div className="table-title">
          <div className="row">
            <div className="col-sm-5">
              <h2>
                Users <b>List</b>
              </h2>
            </div>
            <div className="col-sm-7">
              <Switch></Switch>
              <Link to="/admin/user-add" className="btn btn-primary">
                <span>Add User</span>
              </Link>
            </div>
          </div>
        </div>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date Created</th>
              <th>Ticket</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Michael Holz</td>
              <td>04/10/2013</td>
              <td>Admin</td>
              <td>
                <span className="status text-success">&bull;</span> Approved
              </td>
              <td>
                <Button>Details</Button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">
            Showing <b>5</b> out of <b>25</b> entries
          </div>
          <ul className="pagination">
            <li className="page-item disabled">
              <a href="/">Previous</a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                1
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                2
              </a>
            </li>
            <li className="page-item active">
              <a href="/" className="page-link">
                3
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                4
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                5
              </a>
            </li>
            <li className="page-item">
              <a href="/" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AdminUsersList;
