import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMe, updateMe } from "../services/profileService";
//import auth from "../services/authService";

class MeForm extends Form {
  state = {
    data: {
      email: "",

      fullName: "",
      street: "",
      city: "",
      country: "",
      zip: ""
    },
    errors: {}
  };

  schema = {
    email: Joi.string().label("Email"),
    fullName: Joi.string().label("Full Name"),
    street: Joi.string().label("Street Address"),
    city: Joi.string().label("City"),
    country: Joi.string().label("Country"),
    zip: Joi.string().label("Zip")
  };
  async componentDidMount() {
    await this.populateMe();
  }
  doSubmit = async () => {
    await updateMe(this.state.data);

    this.props.history.push("/contracts");
  };
  async populateMe() {
    try {
      const email = this.props.match.params.email;
      const { data: me } = await getMe(email);
      this.setState({ data: this.mapToViewModel(me) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }
  mapToViewModel(me) {
    return {
      email: me.email,
      fullName: me.fullName,
      street: me.street,
      country: me.country,
      city: me.city,
      zip: me.zip
    };
  }

  render() {
    return (
      <div>
        <h1>Profile Update</h1>
        <h2>for {this.state.data.email}</h2>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("fullName", "Full Name")}
          {this.renderInput("street", "Street Adrress")}
          {this.renderInput("city", "City")}
          {this.renderInput("country", "Country")}
          {this.renderInput("zip", "Zip Code")}

          {this.renderButton("Update")}
        </form>
      </div>
    );
  }
}

export default MeForm;
