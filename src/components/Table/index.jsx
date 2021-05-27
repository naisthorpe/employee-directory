import React from "react";
import "./style.css";
import TableRow from "../TableRow";
import Search from "../Search";
import API from "../../utils/API";

function Table(props) {



    return (
        <>
            <Search />
            <table class="table">
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
                    <TableRow />
                </tbody>
            </table>
        </>
    );
}

export default Table;