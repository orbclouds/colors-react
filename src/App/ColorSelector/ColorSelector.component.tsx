import React from "react";
import type { FC, ChangeEventHandler } from "react";

import { getBackgroundStyle } from "@app/utils";

import styles from "./ColorSelector.module.css";

export type ColorHandler = ChangeEventHandler<HTMLInputElement>;

interface Props {
  value: string;
  onChange: ColorHandler;
}

const ColorSelector: FC<Props> = (props) => {
  return (
    <div style={getBackgroundStyle(props.value)} className={styles.Container}>
      <label htmlFor="color" className={styles.Label}>
        {props.value}
      </label>
      <input id="color" type="color" className={styles.Input} {...props} />
    </div>
  );
};

export default ColorSelector;
