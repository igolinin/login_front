import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class UsersTable extends Component {
  columns = [
    {
      path: "fullName",
      label: "Full Name",
      content: user => <Link to={`/users/${user._id}`}>{user.fullName}</Link>
    },
    { path: "role", label: "role" },
    { path: "email", label: "Email" },
    { path: "country", label: "Country" },
    {
      key: "like",
      content: user => (
        <Like liked={user.liked} onClick={() => this.props.onLike(user)} />
      )
    }
  ];

  deleteColumn = {
    key: "delete",
    content: user => (
      <button
        onClick={() => this.props.onDelete(user)}
        className="btn btn-danger btn-sm"
      >
        Delete
      </button>
    )
  };

  constructor() {
    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin) this.columns.push(this.deleteColumn);
  }

  render() {
    const { users, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={users}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default UsersTable;
