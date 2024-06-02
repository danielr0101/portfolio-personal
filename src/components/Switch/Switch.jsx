// Switch.jsx
import React from "react";
import styles from './Switch.module.css';
import cx from "classnames";

const Switch = ({ rounded = false, onToggle }) => {
  const sliderCX = cx(styles.slider, {
    [styles.rounded]: rounded
  });

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={onToggle} />
      <span className={sliderCX} />
    </label>
  );
}

export default Switch;
