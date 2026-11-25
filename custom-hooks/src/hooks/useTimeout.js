// Exercise 8 - useTimeout
import { useState, useEffect, useRef } from "react";

export default function useTimeout(callback, delayMs, enabled) {
  const [isScheduled, setIsScheduled] = useState(enabled);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    setIsScheduled(enabled);
  }, [enabled]);

  useEffect(() => {
    if (!isScheduled) return;

    const id = setTimeout(() => {
      callbackRef.current();
      setIsScheduled(false);
    }, delayMs);

    return () => clearTimeout(id);
  }, [delayMs, isScheduled]);

  const start = () => setIsScheduled(true);
  const cancel = () => setIsScheduled(false);

  return { start, cancel, isScheduled };
}