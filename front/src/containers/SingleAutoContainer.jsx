import React, { Component } from "react";
import axios from "axios";
import SingleAuto from "../components/SingleAuto";

export default class SingleAutoContainer extends Component {
  constructor() {
    super()
    this.state = {
      autos: {},
      
    };
  }
  
  componentDidMount() {
      axios
      .get(`/api/autos/${this.props.autoId}`)
      .then((res) => res.data)
      .then((serverAuto) => this.setState({ autos: serverAuto }));
    
  }  
  
  render() {
    
    return  <SingleAuto autos={this.state.autos} />
  }

}
