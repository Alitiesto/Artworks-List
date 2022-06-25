import { useEffect, useRef } from "react";

export default function useUpdateEffect(effect, deps) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    effect();
  }, deps);
}
