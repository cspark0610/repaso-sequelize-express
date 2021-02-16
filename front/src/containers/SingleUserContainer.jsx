import React, { Component } from "react";
import axios from "axios";
import SingleUser from "../components/SingleUser";

export default class SingleUserContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user : {},
      cars :[]
    };
  }
  
  componentDidMount() {
    let Users = axios.get(`/api/users/${this.props.userId}`).then(res=> res.data);
    let Cars = axios.get(`/api/users/${this.props.userId}/autos`).then(res=> res.data);
    Promise.all([Users, Cars])
    .then((resultados )=> {
      //console.log(resultados);
      this.setState({user : resultados[0]})
      this.setState({cars : resultados[1]})
    })
  }
  
  render() {
    
    return <SingleUser user={this.state.user} cars ={this.state.cars}/>;
  }
}


