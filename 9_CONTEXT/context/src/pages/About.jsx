import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h2>ABOUT</h2>
      <h2>Valor do contador: {counter}</h2>
      <ChangeCounter />
    </div>
  );
};

export default About;
