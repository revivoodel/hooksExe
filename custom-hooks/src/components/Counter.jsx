// Exercise 2 - useCounter Component
import useCounter from "../hooks/useCounter";

export default function CounterDemo() {
  const { value, inc, dec, reset } = useCounter(0);

  return (
    <div>
      <h2>Exercise 2 - useCounter</h2>
      <p>Count: {value}</p>

      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}