import React from "react";
import "./style.css";


function searchForm(props) {
    return (
        <form>
            <div>
                <label>Search for a Pokemon:</label>
                <input
                    value={props.value}
                    name="search"
                    type="text"
                    onChange={props.handleInputChange}
                    placeholder="Enter a Pokemon"

                />
                <button onClick={props.handleSubmitForm}>Search</button>
            </div>
        </form>
    )
}

export default searchForm;