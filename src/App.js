import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Users from "./components/users";
import Contracts from "./components/contracts";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import MeForm from "./components/meForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import users from "./services/switcherService";
import "./App.css";
import ContractForm from "./components/contractForm";
import UserRoleForm from "./components/userRoleForm";
//import httpService from "./services/httpService";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
    console.log(user);
  }
  SwitchUser = event => {
    const user = users.filter(n => {
      return n.email === event.target.value;
    })[0];
    auth.loginWithJwt(user.jwt);

    this.setState({ user });
    return <Redirect to={"/me/" + user.email} />;
  };

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} SwitchUser={this.SwitchUser} />
        <main className="container-fluid">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route
              path="/me/:email"
              render={props => <MeForm {...props} user={this.state.user} />}
            />
            <Route path="/logout" component={Logout} />
            <Route
              exact
              path="/contracts/:id"
              render={props => <ContractForm {...props} user={user} />}
            />
            <ProtectedRoute
              path="/contracts"
              render={props => <Contracts {...props} user={this.state.user} />}
            />
            <Route path="/users/:email" component={UserRoleForm} />} />
            <Route
              path="/users"
              render={props => <Users {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/contracts" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
