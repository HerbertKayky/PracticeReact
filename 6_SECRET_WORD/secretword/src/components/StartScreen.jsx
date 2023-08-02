import { useState } from "react";
import "./StartScreen.css";

const StartScreen = () => {
  const [message, setMessage] = useState();

  const handleClick = () => {
    setMessage("você é muito gay!");
  };


  setTimeout(() => {
    setMessage(null);
  }, 5000);

  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={handleClick}>Começar jogo</button>
      <p>{message}</p>
    </div>
  );
};

export default StartScreen;
