import React from "react";

const PhotoCard = props => {
    console.log(props);
    return (
        <div className="photoData" key={props.id}>
            <h2>{props.title}</h2>
            <h2>{props.date}</h2>
            <img src={props.photo} alt="Photo of the day"></img>
            <p>{props.explanation}</p>
        </div>
    );
};
export default PhotoCard;