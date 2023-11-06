import React, { Component } from "react";

import { Player } from "./components/Player";


import './App.css'

const Moves=["Rock","Scessor","Paper"];

class App extends Component{

  
  state={
    PlayerOne:Moves[0],
    PlayerTwo:Moves[1],
    Winner:"",
    PlayerOneScore:0,
    PlayerTwoScore:0
  }

  startGame=()=>
  {
    let count=0;

    let gameIntervel = setInterval(()=>
    {
      count++;
      this.setState(
        {
          PlayerTwo: Moves[Math.floor(Math.random() * 3)],
          Winner:""
        })
      if(count>5)
      {
        clearInterval(gameIntervel)
        this.setState(
          {
            Winner: this.selectWinner()
          })}
    },150)

  }

  selectWinner=()=>
  {
    const {PlayerOne,PlayerTwo,PlayerOneScore,PlayerTwoScore} =this.state;

    
    if(PlayerOne===PlayerTwo)
    {
      return "It's a Tie"
    }else if(PlayerOne==="Rock")
    {
      if(PlayerTwo==="Scessor")
      {
        this.setState({
          PlayerOneScore:PlayerOneScore+1
        })
        return "Player  Won The Match"
      }else
      {
        this.setState({
          PlayerTwoScore:PlayerTwoScore+1
        })
        return "Computer Two Won The Match"
      }

    }else if(PlayerOne==="Paper")
    {
      if(PlayerTwo==="Rock")
      { this.setState({
        PlayerOneScore:PlayerOneScore+1
      })
        return "Player  Won The Match"

      }else
      { this.setState({
        PlayerTwoScore:PlayerTwoScore+1
      })
        return "Computer Two Won The Match"
      }

    }else if(PlayerOne==="Scessor")
    {
      if(PlayerTwo==="Paper")
      {
        this.setState({
          PlayerOneScore:PlayerOneScore+1
        })
        return "Player  Won The Match"
      }else
      { this.setState({
        PlayerTwoScore:PlayerTwoScore+1
      })
        return "Computer Two Won The Match"
      }
    }
  }

  selectWeapon =(e)=>
  {
    this.setState(
      {
        PlayerOne:Moves[e],
        Winner:""
      }
    )
  }

  render()
  {
    const {PlayerOne,PlayerTwo,Winner,PlayerOneScore,PlayerTwoScore}=this.state
    return (

    <div className="container">
      <div className="message">Rock Paper Scissors </div>
      <div className="images">
      <div className="player">
        <Player weaponsValue={PlayerOne}/>
      </div>
      <div class="player">
        <Player weaponsValue={PlayerTwo}/>
      </div>
    </div>
    <div>
      <div className="points">
        PLAYER <span className="computerPoints">{PlayerOneScore}</span> /
              <span className="playerPoints">{PlayerTwoScore}</span> COMPUTER
      </div>
    </div>

    <div className="options">
      <button className="weaponBtn" onClick={()=>this.selectWeapon(0)}>Rock</button>
      <button className="weaponBtn" onClick={()=>this.selectWeapon(1)}>Paper</button>
      <button className="weaponBtn" onClick={()=>this.selectWeapon(2)}>Scissors</button>
    </div>

      <button type="button" onClick={this.startGame}>START</button>

      <div className="Result">{Winner? Winner:null}</div>
  </div>
    )
  }
}


export default App;

