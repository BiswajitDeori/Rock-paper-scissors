
import React from "react";


import rock from './images/rock.png'
import paper from './images/paper.png'
import scissor from './images/scissor.png'




export const Player=({weaponsValue})=>
{
    return (
            <img src={
                weaponsValue === "Rock" ? rock: weaponsValue === "Paper" ? paper : scissor
            }  alt="image" >
            </img>
    )
}

