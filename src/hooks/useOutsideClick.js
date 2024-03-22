import { useEffect, useRef } from "react";

export function useOutsideClick(closeFunction, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) closeFunction();
      }

      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [closeFunction, listenCapturing]
  );
  return { ref };
}
