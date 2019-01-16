import React from "react";
import { NavLink } from "react-router-dom";
import users from "../services/switcherService";
import UserSelect from "./common/userSelect";

const NavBar = ({ user, SwitchUser }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {user && (
            <NavLink className="nav-item nav-link" to="/contracts">
              Contracts
            </NavLink>
          )}
          {user && user.role === "admin" && (
            <NavLink className="nav-item nav-link" to="/users">
              Customers
            </NavLink>
          )}
          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to={"/me/" + user.email}>
                {user.email}
              </NavLink>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>

              <UserSelect
                name="userSwitcher"
                options={users}
                error=""
                onChange={SwitchUser}
              />
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
