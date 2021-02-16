import React from "react";
import "./style.css";


function searchForm(props) {
    return (
        <form className="searchForm">
            <div>
                <label>Search for a Star Wars Characters:</label>
                <br/>
                <input
                    value={props.value}
                    name="search"
                    type="text"
                    onChange={props.handleInputChange}
                    placeholder="Enter a character"

                />
                <br/>
                <button className="searchBtn" onClick={props.handleSubmitForm}>Search</button>
            </div>
        </form>
    )
}

export default searchForm;