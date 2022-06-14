import React from "react";
import { useState } from "react";
import style from "../../pages/styles.js";
import styles from "./index.module.css";

const AdministrationImageCard = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.parent}>
      <div className={styles.top}>
        <img
          src={`/images/${props.image}.jpg`}
          alt="admission3"
          height="auto"
          className={styles.image}
          width="200rem"
        />
        <textbox
          className={`${styles.textbox} ${hover ? styles.hover : ""}`}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <br />
          <div className={styles.title}> {props.title}</div>
          <br />
          <div
            className={`${styles.learnMore} ${hover ? styles.learnHover : ""}`}
          >
            {" "}
            Learn more
          </div>
          <br />
        </textbox>
      </div>
    </div>
  );
};

export default AdministrationImageCard;
