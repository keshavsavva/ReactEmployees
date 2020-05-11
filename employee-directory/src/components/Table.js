import React, { Component } from "react";
import Axios from "axios";

class Table extends Component {
constructor(props) {
  super(props);
  this.state = {
      employees: []
    } 
}
componentDidMount() {
  this.searchEmployees();
}

searchEmployees = () => {
  Axios.get("https://alper.dev/employees/")
    .then(res => this.setState({ employees: res.data }))
    .catch(err => console.log(err));
};

render() {
  console.log(this.state.employees)
  return (
    <table className = "table table-striped table-hover">
      <thead className ="thead-dark">
        <tr>
            <th>ID #</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Start Date</th>
        </tr>
      </thead>
      <tbody>
        {this.state.employees.map(result => (
          <tr key = {result.id}>
            <td>{result.id}</td>
            <td><img alt = "" src = {result.avatar}></img></td>
            <td>{result.firstName}</td>
            <td>{result.lastName}</td>
            <td>{result.email}</td>
            <td>{result.gender}</td>
            <td>{result.department}</td>
            <td>{result.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
  
}

export default Table;
