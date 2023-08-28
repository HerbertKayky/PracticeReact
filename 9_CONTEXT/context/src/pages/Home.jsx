import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h2>HOME</h2>
      <h2>Valor do contador: {counter}</h2>
      {/* 3 - Alterando valor do context */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
