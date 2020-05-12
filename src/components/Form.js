import React, { Component } from "react";


class Form extends Component {

    render(props) {
        return(
            <div>
                <div class="form-group">
                    <input style = {{marginLeft: 10}} type="text" class="form-control" id="department" placeholder="Filter by Department"></input>
                </div>
                <button style = {{marginLeft: 10}} onClick = {() => this.props.departmentFilter()} className="btn btn-primary">Submit</button>
                <button style = {{marginLeft: 10}} onClick = {this.props.searchEmployees} className="btn btn-primary">View All Departments</button>
            </div>  
        )
    }
}

export default Form;