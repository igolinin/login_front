import React, { Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ContractsTable from "./contractsTable";
import Pagination from "./common/pagination";
import { getContracts, deleteContract } from "../services/contractService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Contracts extends Component {
  state = {
    contracts: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data: contracts } = await getContracts();
    this.setState({ contracts });
  }

  handleDelete = async contract => {
    const originalContracts = this.state.contracts;
    const contracts = originalContracts.filter(m => m._id !== contract._id);
    this.setState({ contracts });

    try {
      await deleteContract(contract._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This contract has already been deleted.");

      this.setState({ contracts: originalContracts });
    }
  };

  handleLike = contract => {
    const contracts = [...this.state.contracts];
    const index = contracts.indexOf(contract);
    contracts[index] = { ...contracts[index] };
    contracts[index].liked = !contracts[index].liked;
    this.setState({ contracts });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      contracts: allContracts
    } = this.state;

    let filtered = allContracts;
    if (searchQuery)
      filtered = allContracts.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const contracts = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: contracts };
  };

  render() {
    const { length: count } = this.state.contracts;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    const { user } = this.props;

    if (count === 0) return <p>There are no contracts in the database.</p>;

    const { totalCount, data: contracts } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3" />
        <div className="col">
          {user && (
            <Link
              to="/contracts/new"
              className="btn btn-primary"
              style={{ marginBottom: 20 }}
            >
              New Contract
            </Link>
          )}
          <p>Showing {totalCount} contracts in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <ContractsTable
            contracts={contracts}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Contracts;
