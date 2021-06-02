import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="header">
            <h1>Employee Directory</h1>
            <p>Click column name to sort</p>
            <p>Use search bar to filter</p>
        </div>
    );
}

export default Header;