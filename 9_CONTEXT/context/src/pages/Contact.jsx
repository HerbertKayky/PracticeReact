import { useCounterContext } from "../hooks/useCounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Contact = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h2>CONTACT</h2>
      <h2>Valor do contador: {counter}</h2>
      <ChangeCounter />
    </div>
  );
};

export default Contact;
