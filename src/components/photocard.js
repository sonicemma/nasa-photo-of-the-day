import React from "react";
import styled from 'styled-components';

const ImageStyle = styled.img`
    width: 500px;
    height: 500px;
`

const ParagraphStyle = styled.p`
    width: 50%;
    display: flex;
    margin-left: 25%;
    font-family: 'Odibee Sans', cursive;
    font-size: 1.5rem;
`
const HeaderTwoStyle = styled.h2`
    font-family: 'Space Mono', monospace;
`

const PhotoCard = props => {
    console.log(props);
    return (
        <div className="PhotoData" key={props.id}>
            <HeaderTwoStyle>{props.title}</HeaderTwoStyle>
            <HeaderTwoStyle>{props.date}</HeaderTwoStyle>
            <ImageStyle src={props.photo} alt="Photo of the day"></ImageStyle>
            <ParagraphStyle>{props.explanation}</ParagraphStyle>
        </div>
    );
};
export default PhotoCard;