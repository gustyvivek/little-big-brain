import React,{Component} from 'react';
import Memes from "./Components/Memes"
import Desktop from "./Components/Desktop"
import './App.css';
class App extends Component{

  render () {
    return(
    <>
    <div className="content-desktop">
      <Desktop/>
    </div>
    <div className="content-mobile">
      <Memes/>
    </div>
    </>
    )}

}

export default App;
