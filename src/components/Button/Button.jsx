import React from 'react';
import styles from "./Button.module.css";

const Button = ( { onLoadMore }) => {
  return (
      <button type="button" onClick={onLoadMore} className={styles.Button}>
        Load more
      </button>
    );
}

export default Button;