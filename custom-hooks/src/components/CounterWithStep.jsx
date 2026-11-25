// Exercise 3 - useCounterWithStep Component
import useCounterWithStep from "../hooks/useCounterWithStep";

export default function CounterWithStepDemo() {
  const { value, inc, dec, reset } = useCounterWithStep(0, 2);

  return (
    <div>
      <h2>Exercise 3 - useCounterWithStep</h2>
      <p>Count: {value}</p>

      <button onClick={inc}>+2</button>
      <button onClick={dec}>-2</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}