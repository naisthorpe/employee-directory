import React from "react";
import "./style.css";

function Search() {
    return (
        <div>
            <div className="mb-3">
                <input
                    type="search"
                    className="form-control"
                    id="searchInput"
                    placeholder="Search"
                />
            </div>
        </div>
    );
}

export default Search;