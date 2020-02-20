import React from "react";

const PhotoCard = props => {
    return (
        <div className="photoData" key={props.id}>
            <h2>Title:</h2>
            <img src="" alt="Photo of the day"></img>
            <p>Description:</p>
        </div>
    )
}