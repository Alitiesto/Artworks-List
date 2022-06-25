import { useState } from "react";
import useDebouncedEffect from "./useDebouncedEffect";

export default function useDebouncedState(initialValue, delay = 1000) {
  const [tempState, setTempState] = useState(initialValue);
  const [state, setState] = useState(initialValue);

  useDebouncedEffect(
    () => {
      setState(tempState);
    },
    delay,
    [tempState]
  );

  return [tempState, state, setTempState, setState];
}
