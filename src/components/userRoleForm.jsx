import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMe, updateRole } from "../services/profileService";
//import auth from "../services/authService";

class UserRoleForm extends Form {
  state = {
    data: {
      email: "",
      role: "",
      fullName: "",
      street: "",
      city: "",
      country: "",
      zip: ""
    },
    roles: [
      { _id: "1", name: "client" },
      { _id: "2", name: "manager" },
      { _id: "3", name: "admin" },
      { _id: "4", name: "not confirmed" }
    ],
    errors: {}
  };

  schema = {
    email: Joi.string().label("Email"),
    fullName: Joi.string().label("Full Name"),
    street: Joi.string().label("Street Address"),
    city: Joi.string().label("City"),
    country: Joi.string().label("Country"),
    zip: Joi.string().label("Zip"),
    role: Joi.string().label("Role")
  };
  async componentDidMount() {
    await this.populateUser();
  }
  doSubmit = async () => {
    const body = {
      email: this.state.data.email,
      newRole: this.state.data.role
    };
    await updateRole(body);

    this.props.history.push("/users");
  };
  async populateUser() {
    try {
      const email = this.props.match.params.email;
      const { data: user } = await getMe(email);
      this.setState({ data: this.mapToViewModel(user) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }
  mapToViewModel(user) {
    return {
      email: user.email,
      fullName: user.fullName,
      street: user.street,
      country: user.country,
      city: user.city,
      zip: user.zip,
      role: user.role
    };
  }

  render() {
    return (
      <div>
        <h1>Profile Update</h1>
        <h5> {this.state.data.email}</h5>

        <h5> {this.state.data.fullName}</h5>
        <h5> {this.state.data.street}</h5>
        <h5> {this.state.data.city}</h5>
        <h5> {this.state.data.zip}</h5>
        <h5> {this.state.data.country}</h5>
        <h5>Current role: {this.state.data.role}</h5>
        <form onSubmit={this.handleSubmit}>
          {this.renderSelect("role", "New Role", this.state.roles)}

          {this.renderButton("Update")}
        </form>
      </div>
    );
  }
}

export default UserRoleForm;
