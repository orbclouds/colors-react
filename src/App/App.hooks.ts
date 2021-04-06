import { useState, useCallback } from "react";

import type { ColorHandler } from "./ColorSelector";

interface Hooks {
  color: string;
  updateColor: ColorHandler;
}

const useHooks = (): Hooks => {
  const [color, setColor] = useState("#342EAD");
  const updateColor: ColorHandler = useCallback(({ currentTarget }) => {
    const { value } = currentTarget as HTMLInputElement;
    setTimeout(() => {
      setColor(value.toUpperCase());
    });
  }, []);

  return { color, updateColor };
};

export default useHooks;
