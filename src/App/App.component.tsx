import React from 'react';
import type { FC } from 'react';

import Orb from '@app/Orb';

import Combination from './Combination';
import ColorSelector from './ColorSelector';

import useHooks from './App.hooks';
import styles from './App.module.css';
import { COMBINATIONS } from './App.const';

const App: FC = () => {
  const {
    color,
    updateColor,
  } = useHooks();

  return (
    <>
      <Orb />
      <main
        className={styles.Container}
      >
        <header
          className={styles.Selector}
        >
          <ColorSelector
            value={color}
            onChange={updateColor}
          />
        </header>
        <div
          className={
            styles.Combinations
          }
        >
          {COMBINATIONS.map((props) => (
            <Combination
              key={props.name}
              {...props}
              color={color}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default App;
