import React from "react";
import "./style.css";

function TableRow(props) {
    return (
        <tr>
            <td>{props.image}</td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.birth}</td>
        </tr>
    )
}

export default TableRow;