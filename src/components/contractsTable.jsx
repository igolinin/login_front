import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Like from "./common/like";

class ContractsTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: contract => (
        <Link to={`/contracts/${contract._id}`}>{contract._id}</Link>
      )
    },
    { path: "manager", label: "Manager" },
    { path: "client", label: "Client" },
    { path: "service", label: "Service" },
    {
      key: "like",
      content: contract => (
        <Like
          liked={contract.liked}
          onClick={() => this.props.onLike(contract)}
        />
      )
    }
  ];

  deleteColumn = {
    key: "delete",
    content: contract => (
      <button
        onClick={() => this.props.onDelete(contract)}
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
    const { contracts, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={contracts}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ContractsTable;
