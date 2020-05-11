import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Table from "./Table";
import Axios from "axios";

class DirectoryContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchEmployees();
  }

  searchEmployees = () => {
    Axios.get("https://alper.dev/employees/")
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <div>
       <Table info = {this.state.results} />
      </div>
    );
  }
}

export default DirectoryContainer;
