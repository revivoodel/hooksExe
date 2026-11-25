// Exercise 7 - useInterval Component
import { useState } from "react";
import useInterval from "../hooks/useInterval";

export default function IntervalDemo() {
  const [count, setCount] = useState(0);

  const { start, stop, isRunning } = useInterval(
    () => setCount(prev => prev + 1),
    1000,
    false
  );

  return (
    <div>
      <h2>Exercise 7 - useInterval</h2>

      <p>Count: {count}</p>
      <p>Status: {isRunning ? "Running" : "Stopped"}</p>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}