import React from "react";
import "./style.css";

function EmployeeListItem() {
    return (
        <>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>Bird</td>
                <td>@twitter</td>
            </tr>
        </>
    );
}

export default EmployeeListItem;