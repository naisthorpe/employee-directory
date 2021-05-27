import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        
    );
}

export default Search;