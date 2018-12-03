import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from "axios";

class Home extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(data);
    this.setState({ data });
  }
  render() {
    const columns = [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Email",
        accessor: "email"
      }
    ];
    return <ReactTable data={this.state.data} columns={columns} />;
  }
}

export default Home;
