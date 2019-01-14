import React, { Component } from "react";
import auth from "../services/authService";
import { Link } from "react-router-dom";
import Table from "./common/table";
import Approve from "./common/approve";

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
    { path: "total", label: "Total" },
    { path: "service", label: "Service" },
    {
      key: "approve",
      label: "Approved",
      content: contract => (
        <Approve
          approved_by={contract.approved_by}
          onClick={() => this.props.onApprove(contract)}
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
    if (user && user.role === "admin") this.columns.push(this.deleteColumn);
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
