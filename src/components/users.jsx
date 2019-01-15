import React, { Component } from "react";
import { toast } from "react-toastify";
import UsersTable from "./usersTable";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import { deleteUser } from "../services/userService";
import { getUsers } from "../services/profileService";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import SearchBox from "./searchBox";

class Users extends Component {
  state = {
    users: [],
    roles: [
      { _id: "", name: "All Roles" },
      { _id: "1", name: "client" },
      { _id: "2", name: "manager" },
      { _id: "3", name: "admin" },
      { _id: "4", name: "not confirmed" }
    ],
    currentPage: 1,
    pageSize: 25,
    searchQuery: "",
    selectedRole: null,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }

  handleDelete = async user => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter(m => m._id !== user._id);
    this.setState({ users });

    try {
      await deleteUser(user._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This user has already been deleted.");

      this.setState({ users: originalUsers });
    }
  };

  handleLike = user => {
    const users = [...this.state.users];
    const index = users.indexOf(user);
    users[index] = { ...users[index] };
    users[index].liked = !users[index].liked;
    this.setState({ users });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleRoleSelect = role => {
    this.setState({ selectedRole: role, searchQuery: "", currentPage: 1 });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedRole: null, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedRole,
      searchQuery,
      users: allUsers
    } = this.state;

    let filtered = allUsers;
    if (searchQuery)
      filtered = allUsers.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedRole && selectedRole._id)
      filtered = allUsers.filter(m => m.role === selectedRole.name);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const users = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: users };
  };

  render() {
    const { length: count } = this.state.users;
    const { pageSize, currentPage, sortColumn, searchQuery } = this.state;
    //const { user } = this.props;

    if (count === 0) return <p>There are no users in the database.</p>;

    const { totalCount, data: users } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={this.state.roles}
            selectedItem={this.state.selectedRole}
            onItemSelect={this.handleRoleSelect}
          />
        </div>
        <div className="col-9">
          <p>Showing {totalCount} users in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <UsersTable
            roles={this.state.roles}
            users={users}
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

export default Users;
