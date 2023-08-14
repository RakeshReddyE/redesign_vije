import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div id="main" className={styles.notFoundMainContainerStyles}>
      <div className={styles.errorMessageContainerStyles}>
        <h1 className={styles.errorMessageTextStyles}>Error 404</h1>
        <p>
          Back to{" "}
          <span onClick={() => navigate("/")} className={styles.homeTextStyles}>
            HOME
          </span>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
