import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getContract, saveContract } from "../services/contractService";
import { getUsers } from "../services/profileService";

class ContractForm extends Form {
  state = {
    data: {
      manager: "",
      client: "",
      total: "",
      service: ""
    },
    clients: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    manager: Joi.string()
      .required()
      .label("Manager"),
    service: Joi.string()
      .required()
      .label("Service"),
    client: Joi.string()
      .required()
      .label("Client"),
    total: Joi.number()
      .required()
      .min(0)
      .max(10000)
      .label("Total")
  };

  async populateClients() {
    const { data } = await getUsers();
    const clients = data.map(n => {
      return { name: n.email, _id: n._id };
    });
    console.log(clients);

    this.setState({ clients });
  }

  async populateContract() {
    try {
      const contractId = this.props.match.params.id;
      this.setState({ data: { manager: this.props.user.email } });
      if (contractId === "new") return;

      const { data: contract } = await getContract(contractId);
      this.setState({ data: this.mapToViewModel(contract) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateClients();
    await this.populateContract();
  }

  mapToViewModel(contract) {
    return {
      _id: contract._id,
      manager: contract.manager,
      client: contract.client,
      total: contract.total,

      service: contract.service
    };
  }

  doSubmit = async () => {
    await saveContract(this.state.data);

    this.props.history.push("/contracts");
  };

  render() {
    return (
      <div>
        <h1>Contract Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("service", "Service")}
          {this.renderSelect("client", "Client", this.state.clients)}
          {this.renderInput("total", "Total", "number")}

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default ContractForm;
