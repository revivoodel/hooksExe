// Exercise 10 - useWindowSize Component
import useWindowSize from "../hooks/useWindowSize";

export default function WindowSizeDemo() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Exercise 10 - useWindowSize</h2>

      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
}