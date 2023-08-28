import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"


const About = () => {
  const {counter, setCounter} = useContext(CounterContext)


  return (
    <div>
        <h2>ABOUT</h2>
        <h2>Valor do contador: {counter}</h2>
      <ChangeCounter />
    </div>
  )
}

export default About