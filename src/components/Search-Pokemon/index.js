import React from "react";
import "./style.css";


function searchForm(props) {
    return (
        <form className="searchForm">
            <div>
                <label className="labelText">Search for a Star Wars Characters:</label>
                <br/>
                <input
                    value={props.value}
                    name="search"
                    type="text"
                    onChange={props.handleInputChange}
                    placeholder="Enter a character...."
                    className="searchInput"

                />
                <br/>
                <button className="searchBtn" onClick={props.handleSubmitForm}>Search</button>
            </div>
        </form>
    )
}

export default searchForm;