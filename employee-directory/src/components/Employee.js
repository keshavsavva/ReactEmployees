import React, { Component } from "react";


class Employee extends Component {
    
    render(props) {
        return(
            <tbody>
                {this.props.employees.map(result => (
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
        )
    }
}

export default Employee;