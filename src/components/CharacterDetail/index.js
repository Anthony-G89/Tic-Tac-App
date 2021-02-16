import React from "react";
import "./style.css";
function CharacterDetail (props) {
    return (
        <div className="container">

            <h2>Name: {props.name}</h2>
            <h3>Picture: {props.url}</h3>
            <p>Birth Year: {props.birthYear}</p>
            <p>Eye Colors: {props.eyeColor}</p>
            <p>Gender: {props.gender}</p>
            

        </div>
    )
}

export default CharacterDetail;