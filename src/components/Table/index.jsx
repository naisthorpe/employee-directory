import React, {Component} from "react";
import "./style.css";
import TableRow from "../TableRow";
import Search from "../Search";
import API from "../../utils/API";

class Table extends Component {

    state = {
        // All data from API
        users: [],
        // Search results that update with state change
        searchedUsers: [],
        // Search value
        search: "",
        // Error
        error: ""
        
    };

    componentDidMount() {
        API.getUsers()
            .then(res => this.setState({users: res.data.results, searchedUsers: res.data.results}))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({search: event.target.value});
    }
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.search);
        // API.getUsers()
        //     .then(res => {

            // })
    }

    handleSort = event => {

    }

    render() {
        return (
            <>
                <Search 
                    handleChange={this.handleInputChange} 
                    handleSubmit={this.handleSubmit} 
                    handleSort={this.handleSort}
                    search={this.state.search} />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.searchedUsers.map(user => {
                            console.log(user);
                            return <TableRow image={user.picture.thumbnail} name={user.name} phone={user.phone} email={user.email} dob={user.dob.date}/>
                        })}
                    </tbody>
                </table>
            </>
        );
    }

}


export default Table;