import React from "react";
import "./style.css";

function Header() {
    return (
        <>
            <h1 className="header">Employee Directory</h1>
            <p className="subhead">Click column name to sort.</p>
            <p className="search-head">Use search box to narrow results.</p>
        </>
    );
}

export default Header;