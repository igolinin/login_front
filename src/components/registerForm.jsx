import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
//import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: {
      email: "",
      password: "",
      fullName: "",
      street: "",
      city: "",
      country: "",
      zip: "",
      birthday: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    fullName: Joi.string()
      .required()
      .label("Full Name"),
    street: Joi.string().label("Street Address"),
    city: Joi.string().label("City"),
    country: Joi.string().label("Country"),
    zip: Joi.string().label("Zip"),
    birthday: Joi.string().label("Date of birth")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      console.log(response);
      //auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/login";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("fullName", "Full Name")}
          {this.renderInput("street", "Street Adrress")}
          {this.renderInput("city", "City")}
          {this.renderInput("country", "Country")}
          {this.renderInput("zip", "Zip Code")}
          {this.renderInput("birthday", "Date of birth")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
