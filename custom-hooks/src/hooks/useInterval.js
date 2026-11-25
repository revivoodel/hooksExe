// Exercise 7 - useInterval
import { useState, useEffect, useRef } from "react";

export default function useInterval(callback, intervalMs, enabled) {
  const [isRunning, setIsRunning] = useState(enabled);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    setIsRunning(enabled);
  }, [enabled]);

  useEffect(() => {
    if (!isRunning) return;

    const id = setInterval(() => {
      callbackRef.current();
    }, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs, isRunning]);

  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);

  return { start, stop, isRunning };
}