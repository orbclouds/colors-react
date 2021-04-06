import {
  useRef,
  useState,
  useEffect,
  useCallback,
  MouseEventHandler,
} from 'react';

interface Hooks {
  displayedColor: string;
  copy(
    value: string
  ): MouseEventHandler<HTMLButtonElement>;
}

const useHooks = (
  color: string
): Hooks => {
  const timeout = useRef<null | ReturnType<
    typeof setTimeout
  >>(null);
  const [
    displayedColor,
    setDisplayedColor,
  ] = useState(color);

  const copy = useCallback(
    (value: string) => async () => {
      await navigator.clipboard.writeText(
        value
      );
      setDisplayedColor('Copied!');
    },
    []
  );

  useEffect(() => {
    if (timeout.current)
      clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setDisplayedColor(color);
    }, 1 * 1000);

    return () => {
      if (timeout.current)
        clearTimeout(timeout.current);
    };
  }, [color, displayedColor]);

  return { copy, displayedColor };
};

export default useHooks;
