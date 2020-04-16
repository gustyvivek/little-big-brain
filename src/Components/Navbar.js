import React from "react";
function Navbar(props){
    const msg="Okay, so you need to be spoon-fed.\n\n1.Double tap on any meme.\n2.Don't ever double tap on the same meme again. Like, ever!\n\nKeep doing that till you become real smart.\n\nIf you just wanna look at memes, then keep reloading for an unlimited supply of memes.\n\n\nMeme Source: Reddit";
    var scoreMsg;
    if(props.currentScore===1)
        scoreMsg= <p><span>{props.currentScore} meme.</span></p>
    else
        scoreMsg= <p><span>{props.currentScore} memes.</span></p>
    
    return(
        <header className="container-fluid fixed-top nav">
            <div className="row">
                <h1 className="col-sm-8">Big Brain Time</h1>
                <nav className="col-sm-8">
                    {scoreMsg}
                    <p>Psych Score: <span>{props.highScore}</span></p>
                    <p className="Help" onClick={
                        ()=>{alert(msg);}
                    }>Help</p>
                    {props.children}
                </nav>
            </div>
        </header>
)}

export default Navbar;