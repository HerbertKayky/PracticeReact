import PropTypes from "prop-types";
// 1 - Criar context
import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2 - Criar provider

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

// Adicionando validação de props
CounterContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
