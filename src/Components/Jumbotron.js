import React from "react";

function Jumbotron(props)
{
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                {props.children}
                <p className="lead">Reload to get a new set of memes every time...</p>
            </div>
        </div>
    );
}
export default Jumbotron;