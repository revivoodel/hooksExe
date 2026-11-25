// Exercise 9 - useDocumentTitle Component
import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function DocumentTitleDemo() {
  const [title, setTitle] = useState("My React App");

  useDocumentTitle(title);

  return (
    <div>
      <h2>Exercise 9 - useDocumentTitle</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <p>Document title: {title}</p>
    </div>
  );
}