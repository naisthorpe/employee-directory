import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Search below by name</p>
            <p>Click "Name" button to sort by last name</p>
        </div>
    );
}

export default Header;