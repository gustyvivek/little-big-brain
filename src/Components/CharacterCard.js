import React from "react";

function CharacterCard(props)
{
    return(
        <div className={"card"+(props.Clicked?"animate":"")}
        onDoubleClick={()=>{props.handleClick(props.id)}}>
            <div className="img-container">
                <img alt={props.title} src={props.image}/>
            </div>
            <div className="img-content">
    <strong>Stolen From: </strong><a href={props.postLink} target="blank">{props.postLink}</a>
            </div>               
        </div>
    );
}

export default CharacterCard;