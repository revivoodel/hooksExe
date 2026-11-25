
 // Exercise 1 - useToggle Component
import useToggle from "../hooks/useToggle";

export default function ToggleDemo() {
  const { value, toggle, setTrue, setFalse } = useToggle();

  return (
    <div>
      <h2>Exercise 1 - useToggle</h2>
      <p>Value: {value ? "True" : "False"}</p>

      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Set True</button>
      <button onClick={setFalse}>Set False</button>
    </div>
  );
}
