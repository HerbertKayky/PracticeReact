import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();
  return (
    <div>
      <h2 style={{ color: color }}>ABOUT</h2>
      <h2>Valor do contador: {counter}</h2>
      <ChangeCounter />
    </div>
  );
};

export default About;
