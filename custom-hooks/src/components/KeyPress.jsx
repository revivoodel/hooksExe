// Exercise 11 - useKeyPress Component
import useKeyPress from "../hooks/useKeyPress";

export default function KeyPressDemo() {
  const isPressed = useKeyPress("Shift");

  return (
    <div>
      <h2>Exercise 11 - useKeyPress</h2>

      <p>Press the Shift key</p>

      <p>
        Status: {isPressed ? "Pressed" : "Not Pressed"}
      </p>
    </div>
  );
}