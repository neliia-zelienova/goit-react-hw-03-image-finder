import React from "react";
import styles from "./Container.module.css";

const Container = ({ title, children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
