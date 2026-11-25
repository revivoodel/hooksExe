// Exercise 6 - usePrevious Component
import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

export default function PreviousDemo() {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);

  return (
    <div>
      <h2>Exercise 6 - usePrevious</h2>

      <p>Current: {count}</p>
      <p>Previous: {previous}</p>

      <button onClick={() => setCount(prev => prev + 1)}>
        +1
      </button>

      <button onClick={() => setCount(prev => prev - 1)}>
        -1
      </button>
    </div>
  );
}