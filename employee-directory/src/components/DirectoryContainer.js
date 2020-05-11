import React, { Component } from "react";
import Table from "./Table";

class DirectoryContainer extends Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };  
  }
  

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
       <Table/>
      </div>
    );
  }
}

export default DirectoryContainer;
