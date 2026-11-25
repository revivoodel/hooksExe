// Exercise 11 - useKeyPress
import { useState, useEffect } from "react";

export default function useKeyPress(key) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === key) {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === key) {
        setIsPressed(false);
      }
    };

    const handleBlur = () => setIsPressed(false);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
    };
  }, [key]);

  return isPressed;
}