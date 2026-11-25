// Exercise 9 - useDocumentTitle
import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}