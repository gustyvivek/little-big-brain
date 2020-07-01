import React from "react";
function Navbar(props){
    const msg="Okay, so you need to be spoon-fed.\n\n1.Double tap on any meme.\n2.Don't ever double tap on the same meme again. Like, ever!\n\nKeep doing that till you become real smart.\n\nIf you just wanna look at memes, then keep reloading for an unlimited supply of memes.\n\nWanna a steal a meme? Click & hold. \n\n\nMeme Source: Reddit";
    var scoreMsg;
    if(props.currentScore===1)
        scoreMsg= <p><span>{props.currentScore} meme.</span></p>
    else
        scoreMsg= <p><span>{props.currentScore} memes.</span></p>
    
    return(
        <header className="container-fluid fixed-top nav">
            <div className="row">
                <h1 className="col-sm-8">swiss valley</h1>
                <nav className="col-sm-8">
                    {scoreMsg}
                    <p className="Help" onClick={
                        ()=>{alert(msg);}
                    }>help.</p>
                    <p>high score: <span>{props.highScore}</span></p>
            
                    {props.children}
                </nav>
            </div>
            <a href="./" onclick class="float">
                <i class="fa fa-refresh fa-lg my-float"></i>
            </a>
        </header>
        
)}

export default Navbar;