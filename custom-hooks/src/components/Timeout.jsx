// Exercise 8 - useTimeout Component
import { useState } from "react";
import useTimeout from "../hooks/useTimeout";

export default function TimeoutDemo() {
  const [message, setMessage] = useState("");

  const { start, cancel, isScheduled } = useTimeout(
    () => setMessage("Time is up!"),
    3000,
    false
  );

  return (
    <div>
      <h2>Exercise 8 - useTimeout</h2>

      <p>Status: {isScheduled ? "Waiting..." : "Stopped"}</p>
      <p>{message}</p>

      <button onClick={() => {
        setMessage("");
        start();
      }}>
        Start
      </button>

      <button onClick={cancel}>Cancel</button>
    </div>
  );
}