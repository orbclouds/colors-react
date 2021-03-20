import React from "react";
import type { FC } from "react";

import { getBackgroundStyle } from "@app/utils";

import useHooks from "./Color.hooks";
import styles from "./Color.module.css";

interface Props {
  value: string;
}

const Color: FC<Props> = ({ value }) => {
  const { copy, displayedColor } = useHooks(value);

  return (
    <button onClick={copy(value)} className={styles.Button}>
      <div
        className={styles.Color}
        data-color={displayedColor}
        style={getBackgroundStyle(value)}
      />
    </button>
  );
};

export default Color;
