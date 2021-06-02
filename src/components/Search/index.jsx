import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="input-group mb-3">
            <input type="text" onChange={props.handleChange} className="form-control" placeholder="Username" value={props.search} aria-label="Username" aria-describedby="basic-addon1" />
            <button className="btn" onClick={props.handleSubmit}>Submit</button>
        </div>

    );
}

export default Search;