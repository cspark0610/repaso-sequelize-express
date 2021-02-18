import React, { Component } from "react";
import axios from "axios";
import Auto from '../components/Auto'
import NewAuto from "../components/NewAuto";


export default class AutosContainer extends Component {
    constructor() {
      super()
      this.state = {
        autos: [],
        newAuto: {
          // Observar modelo de base de datos para ver qué parametros necesito enviarle al back para crear un auto
          marca: "",
          modelo: "",
          anio: 0,
          precio:0,
          ownerId: 0,
          owner:{}

        },
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    componentDidMount() {
      axios
        .get("/api/autos")
        .then((res) => res.data)
        .then((serverAutos) => {
          this.setState({ autos: serverAutos });
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
        newAuto: {
          ...this.state.newAuto,
          [key]: value,
        },
      });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const { marca, modelo, anio, precio, ownerId ,owner} = this.state.newAuto;
      axios
        .post("/api/autos", { marca, modelo, anio, precio, ownerId, owner })
        .then((res) => res.data)
        .then((auto) => {
          console.log(auto);
         this.setState({ autos: [...this.state.autos, auto] })
        });
    }
  
    render() {
      console.log(this.state);
      return (
        <div>
          <NewAuto
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <Auto autos = {this.state.autos}/>
        </div>
      );
    }
  }