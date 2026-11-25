// Exercise 5 - useTextarea Component
import useTextarea from "../hooks/useTextarea";

export default function TextareaDemo() {
  const { value, onChange, setValue, reset } = useTextarea("");

  return (
    <div>
      <h2>Exercise 5 - useTextarea</h2>

      <textarea value={value} onChange={onChange} />

      <p>Value: {value}</p>

      <button onClick={() => setValue("Hello")}>
        Set Hello
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}