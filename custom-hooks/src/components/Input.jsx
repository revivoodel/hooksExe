// Exercise 4 - useInput Component
import useInput from "../hooks/useInput";

export default function InputDemo() {
  const { value, onChange, setValue, reset } = useInput("");

  return (
    <div>
      <h2>Exercise 4 - useInput</h2>

      <input value={value} onChange={onChange} />

      <p>Value: {value}</p>

      <button onClick={() => setValue("Hello")}>
        Set Hello
      </button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}