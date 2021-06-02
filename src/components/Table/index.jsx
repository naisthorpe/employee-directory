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
        error: "",
        // For sorting name column
        order: true
        
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
        //console.log(this.state.search);
        //console.log(this.state.searchedUsers);
        const searchVal = this.state.search;
        let newUsers = [];

        this.state.users.map(user => {
            if (user.name.first.toLowerCase().includes(searchVal.toLowerCase()) || user.name.last.toLowerCase().includes(searchVal.toLowerCase())) {
                newUsers.push(user);
            }
            this.setState({searchedUsers: newUsers});
            return newUsers;
        });

        
        
    }

    handleSort = event => {
        event.preventDefault();
        //console.log("CLICKED");
        const userData = [...this.state.users];
        let sortedData;
        //let sortedData = userData.sort((a,b) => (a.name.last > b.name.last) ? 1 : -1);

        let order = this.state.order;

        order = !order;

        if (order) {
            sortedData = userData.sort((a,b) => (a.name.last > b.name.last) ? 1 : -1);
        } else {
            sortedData = userData.sort((a,b) => (a.name.last < b.name.last) ? 1 : -1);
        }
        

        sortedData.reverse();
        
        this.setState({
            searchedUsers: sortedData,
            users: sortedData,
            order: order
        })
    }

    render() {
        return (
            <>
                <Search 
                    handleChange={this.handleInputChange} 
                    handleSubmit={this.handleSubmit} 
                    handleSort={this.handleSort}
                    search={this.state.search} />
                <table className="table table-striped">
                    <thead>
                        <tr className="text-center mb-4">
                            <th scope="col"><button type="button" className="btn btn-info btn-sm">Image</button></th>
                            <th scope="col"><button type="button" className="btn btn-info btn-sm" onClick={this.handleSort}>Name</button></th>
                            <th scope="col"><button type="button" className="btn btn-info btn-sm">Phone</button></th>
                            <th scope="col"><button type="button" className="btn btn-info btn-sm">Email</button></th>
                            <th scope="col"><button type="button" className="btn btn-info btn-sm">Date of Birth</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.searchedUsers.map(user => {
                            console.log(user);
                            return <TableRow image={user.picture.thumbnail} name={user.name} phone={user.phone} email={user.email} dob={user.dob.date} login={user.login}/>
                        })}
                    </tbody>
                </table>
            </>
        );
    }

}


export default Table;