import { useContext } from "react"
import {CounterContext} from "../context/CounterContext"


const Home = () => {
  const {counter} = useContext(CounterContext)

  return (
    <div>
        <h2>HOME</h2>
        <h2>Valor do contador: {counter}</h2>
    </div>
  )
}

export default Home