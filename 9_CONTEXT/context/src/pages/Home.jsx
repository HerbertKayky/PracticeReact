import ChangeCounter from "../components/ChangeCounter";

// 4 - Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";
import { useThemeContext } from "../hooks/useThemeContext";

const Home = () => {
  const { counter } = useCounterContext();

  //Contexto de tema
  const { theme, toggleTheme } = useThemeContext();

  // 5 - contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h2 style={{ color: color }}>HOME</h2>
      <p>O tema atual é: {theme}</p>
      <h2>Valor do contador: {counter}</h2>
      {/* 3 - Alterando valor do context */}
      <ChangeCounter />
      {/* 6 - Alterando contexto complexo */}
      <div>
        <button onClick={toggleTheme}>Mudar tema</button>
        <button onClick={() => setTitleColor("red")}>Vermelho</button>
        <button onClick={() => setTitleColor("blue")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
