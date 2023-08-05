import PropTypes from "prop-types";

import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>
        A sua Pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  );
};
// Validação de props
GameOver.propTypes = {
  retry: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};
export default GameOver;
