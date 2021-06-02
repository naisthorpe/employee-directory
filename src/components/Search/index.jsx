import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="col-5">
            <div className="input-group mb-3">
                <input type="text" onChange={props.handleChange} className="form-control" placeholder="First or Last Name" value={props.search} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3 justify-content-center">
                <button className="btn btn-primary" onClick={props.handleSubmit}>Submit</button>
            </div>
        </div>

    );
}

export default Search;