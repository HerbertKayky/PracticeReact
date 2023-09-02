// 3 - Alterando contexto

// Refatorei
//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";
import { useCounterContext } from "../hooks/useCounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        Remove value to counter
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default ChangeCounter;
