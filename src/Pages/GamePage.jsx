import React from 'react';
import Game from '../Game/game.jsx';
import { useParams } from "react-router-dom";


const GamePage= () => {
    let { step } = useParams();
    return (
<Game step={Number(step)}/>

);
 }
export default GamePage;