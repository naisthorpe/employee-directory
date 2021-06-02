import React from "react";
import moment from "moment";
import "./style.css";

function TableRow(props) {

    const name = `${props.name.first} ${props.name.last}`;

    return (
        <tr key={props.login.uuid}>
            <td className="align-middle"><img src={props.image} alt={name} /></td>
            <td className="align-middle">{name}</td>
            <td className="align-middle">{props.phone}</td>
            <td className="align-middle">{props.email}</td>
            <td className="align-middle">{moment(props.dob).format('MMMM Do, YYYY')}</td>
        </tr>
    )
}

export default TableRow;