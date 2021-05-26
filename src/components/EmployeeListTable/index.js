import React from "react";
import EmployeeListItem from "../EmployeeListItem";
import "./style.css";

function EmployeeListTable() {
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeListItem />
                </tbody>
            </table>
        </>
    );
}

export default EmployeeListTable;