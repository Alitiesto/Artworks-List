import React from "react";
import Spin from "../../gif/Spin.gif";
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.loader_container} >
      <img src={Spin} alt="loading" />
    </div>
  );
};

export default Loader;
