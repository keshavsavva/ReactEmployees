import React, { Component } from "react";
import Employee from "./Employee";
import Form from "./Form";
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
  sortingHat = (spec) => {
    let list = this.state.employees;
    list.sort((a,b) => (a[spec] > b[spec]) ? 1 : -1 )
    this.setState({
        employees: list
    })
  }

  departmentFilter = (department) => {
    let list = this.state.employees.filter(employee => employee.department === department);
    this.setState({
      employees: list
    })
  }

render() {

  return (
    <div>
      <br></br>
      <Form searchEmployees = {this.searchEmployees} departmentFilter = {() => this.departmentFilter(document.getElementById("department").value.trim())}/>
      <br></br>
    <table className = "table table-striped table-hover">
      <thead className ="thead-dark">
        <tr>
            <th>
            <button onClick = {() => this.sortingHat("id")}>ID # </button>
            </th>
            <th>Avatar</th>
            <th>
              <button onClick = {() => this.sortingHat("firstName")}>First Name</button>
            </th>
            <th>
              <button onClick = {() => this.sortingHat("lastName")}>Last Name</button>
            </th>
            <th>Email</th>
            <th>
              <button onClick = {() => this.sortingHat("gender")}>Gender</button>
            </th>
            <th>
              <button onClick = {() => this.sortingHat("department")}>Department</button>
            </th>
            <th>Date</th>
        </tr>
      </thead>
        <Employee employees = {this.state.employees}/>
    </table>
    </div>
  );
}
  
}

export default Table;
