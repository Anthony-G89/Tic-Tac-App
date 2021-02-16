import React from "react";
import "./style.css";


function title(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className="star">{props.children}</h1>
        </div>
    )
}

export default title;