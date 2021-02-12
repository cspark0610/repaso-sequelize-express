import React, { Component } from "react";
import axios from "axios";
import Users from "../components/Users";
import NewUser from "../components/NewUser";

export default class UsersContainer extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      newUser: {
        // Observar modelo de base de datos para ver qué parametros necesito enviarle al back para crear un usuario.
        name: "",
        lastname: "",
        dni: null,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/users")
      .then((res) => res.data)
      .then((serverUsers) => {
        this.setState({ users: serverUsers });
      });
  }

  handleChange(e) {
    // Leer con detenimiento qué estamos haciendo en este handleChange
    // Pueden hacer console.log(e) e investigar a qué hacen referencia el 
    // e.target.name y el e.target.value
    // PISTA: observen los inputs del newUser
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      newUser: {
        ...this.state.newUser,
        [key]: value,
      },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, lastname, dni } = this.state.newUser;
    axios
      .post("/api/users", { name, lastname, dni })
      .then((res) => res.data)
      .then((user) => this.setState({ users: [...this.state.users, user] }));
  }

  render() {
    return (
      <div>
        <NewUser
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Users users={this.state.users} />
      </div>
    );
  }
}
