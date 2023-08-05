import PropTypes from "prop-types";
import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <button onClick={startGame}>Jogar</button>
    </div>
  );
};
// Validação de props
StartScreen.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default StartScreen;
