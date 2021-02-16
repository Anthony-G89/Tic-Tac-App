import React from "react";
import "./style.css";
function CharacterDetail (props) {
    return (
        <div className="container">

            <h1>Name: {props.name}</h1>
            <h2>Picture: {props.url}</h2>
            <p>Birth Year: {props.birthYear}</p>
            <p>Eye Colors: {props.eyeColor}</p>
            <p>Gender: {props.gender}</p>
            

        </div>
    )
}

export default CharacterDetail;