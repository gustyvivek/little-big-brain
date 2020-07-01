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
                <span className="meme-footer">stolen from: </span><a href={props.postLink} target="blank">{props.postLink}</a>
            </div>               
        </div>
    );
}

export default CharacterCard;