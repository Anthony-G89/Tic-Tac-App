import React from "react";
import "./style.css";
function CharacterDetail (props) {
    return (
        <div className="container">

            <h2 className="details">Name: {props.name}</h2>
            <h3 className="details">Picture: {props.url}</h3>
            <h4 className="details">Birth Year: {props.birthYear}</h4>
            <h4 className="details">Eye Colors: {props.eyeColor}</h4>
            <h4 className="details">Gender: {props.gender}</h4>
            

        </div>
    )
}

export default CharacterDetail;