import { useEffect, useCallback} from "react";

export default function useDebouncedEffect(effect, delay, deps) {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
}
