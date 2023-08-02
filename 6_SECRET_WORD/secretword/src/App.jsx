//CSS
import "./App.css";

//REACT
import { useEffect, useCallback, useState } from "react";

//DATA
import { wordsList } from "./data/Words";

//COMPONENTS
import StartScreen from "./components/StartScreen";

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

function App() {
  const [gameStage,]


  return (
    <div className="App">
      <StartScreen />
    </div>
  );
}

export default App;
