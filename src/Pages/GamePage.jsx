import React from "react";
import Game from "../Game/game.jsx";
import { useParams } from "react-router-dom";
import Nav from "../Nav/nav.jsx";
import Footer from "../Footer/footer.jsx";

const GamePage = () => {
  let { step } = useParams();

  return (
    <>
      <Nav />
      <Game step={Number(step)} />
      <Footer />
    </>
  );
};

export default GamePage;
