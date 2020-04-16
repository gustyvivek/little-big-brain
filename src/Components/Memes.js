import React,{Component} from 'react';
import CharacterCard from "./CharacterCard"
import Wrapper from "./Wrapper";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import './Memes.css';



import axios from "axios";
class Memes extends Component{
  
  constructor(props){
    super(props);
    this.state={
      allMemes:[],
      highScore:0,
      currentScore:0,
      clicked:false
    };
  }
  //Retrieving memes from the API
  componentDidMount(){
    axios.get("https://meme-api.herokuapp.com/gimme/10")
    .then(res=>{
      var temp=0;
          const newMemes=res.data.memes.map(each=>{
            temp=temp+1
            return {
                id: temp,
                clicked:false,
                title: each.title,
                url: each.url,
                postLink: each.postLink
            }
        })
        
        const newState=Object.assign({},this.state,{
            allMemes:newMemes})
        
            this.setState(newState);
    })
    .catch(error=>{
      console.log(error);
      alert("Ice Cream machine broke. Hold on!")
    })
  }

  
  handleClick=(id)=>{
    this.shuffleArray();
    this.handleScore(id);
    console.log(this.state.timesClicked);
  }

  shuffleArray=()=>{
    //Shuffle the array and change state
    const shuffledArr = this.shuffle(this.state.allMemes);
    this.setState({allMemes:shuffledArr});
  } 

  //Function that shuffles an array
  shuffle=(array)=>{
    var currentIndex=array.length,
    temporaryValue,
    randomIndex;

    while(currentIndex !== 0){
      //Random pick
      randomIndex=Math.floor(Math.random()*currentIndex);
      currentIndex= currentIndex - 1;
    
      //Swap it with current element
      temporaryValue=array[currentIndex];
      array[currentIndex]=array[randomIndex];
      array[randomIndex]=temporaryValue;
    }
    return array;
  }


  //Handles Score Updation
  handleScore=(id)=>{
    this.state.allMemes.forEach(element=>{
      //First click on image
      if(id===element.id && element.clicked===false){
        element.clicked=true;
        this.setState({clicked:false});
        this.handleIncrement();
      }
      //Second click on the same image
      else if(id===element.id && element.clicked===true){
        
        if(this.state.currentScore<3)
        {
          alert("Directed by Robert B Weide.\n\nSuch a loser!\nYou couldn't even remember 2 memes");
        }
        
        //Updation of High Score
        else if(this.state.currentScore > this.state.highScore){
          this.setState({highScore:this.state.currentScore});
          alert("It ain't much, but it's honest work.\nNew High Score: "+this.state.currentScore);
        }

        else
          alert("Damn!\nYou can only remember "+this.state.currentScore+" memes???");
        
        //Reset score and game
        this.setState({currentScore:0, clicked:true});
        this.state.allMemes.forEach(element=>(element.clicked=false));
        console.log(this.state.allMemes);

      }
    })
  }

  handleIncrement=()=>{
    //Update current score in state
    this.setState({currentScore:this.state.currentScore+1})
  }


  render () {
    return(
      <>
      <Navbar
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        
      <Wrapper>
        <Jumbotron/>
        {this.state.allMemes.map(meme=>(
          <CharacterCard
            clicked={this.state.clicked}
            handleClick={this.handleClick}
            id={meme.id}
            key={meme.id}
            title={meme.title}
            image={meme.url}
            postLink={meme.postLink}
          />
        ))}
      </Wrapper>
      </>
    );
  }

}

export default Memes;
