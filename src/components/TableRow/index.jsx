import React from "react";
import "./style.css";

function TableRow(props) {

    const name = `${props.name.first} ${props.name.last}`;

    return (
        <tr>
            <td><img src={props.image} /></td>
            <td>{name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    )
}

export default TableRow;