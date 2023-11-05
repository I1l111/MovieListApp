import React from "react";
import logoIMG from "../../assets/watching-a-movie.png";
import styles from "./index.module.css";

const LandingPage = () => {
  return <div className={styles.MainContainer}>
    <div className={styles.PageHeaderContainer}>
      <div className={styles.LogoContainer}>
        <img width="100%" height="100%" src={logoIMG} alt="Movie Lists"/>
      </div>
    </div>
  </div>
};

export default LandingPage;
