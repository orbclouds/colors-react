import React from "react";
import type { FC } from "react";

import Color from "./Color";

import styles from "./Combination.module.css";

export interface ComboDefinition {
  name:
    | "complementary"
    | "monochromatic"
    | "analogous"
    | "triadic"
    | "tetradic";
  algorithm(color: string): string[];
}

interface Props extends ComboDefinition {
  color: string;
}

const Combination: FC<Props> = ({ name, color, algorithm }) => {
  return (
    <section className={styles.Container}>
      <h2 className={styles.Heading}>{name}</h2>
      <div className={styles.Colors}>
        {algorithm(color).map((value, i) => (
          <Color key={i} value={value} />
        ))}
      </div>
    </section>
  );
};

export default Combination;
