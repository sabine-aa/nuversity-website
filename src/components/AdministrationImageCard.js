import React from "react";
import Background from "./../images/background.jpg";
import { useState } from "react";
import style from "../pages/styles.js";

const AdministrationImageCard = (props) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        borderRadius: "30px",
        justifyContent: "center",
        marginRight: "2rem",
        marginLeft: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={`/images/${props.image}.jpg`}
          alt="admission3"
          height="auto"
          style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px" }}
          width="200rem"
        />
        <textbox
          style={{
            border: "2px ",
            display: "flex",
            flexDirection: "column",
            borderBottomLeftRadius: "30px",
            borderBottomRightRadius: "30px",
            justifyContent: "center",
            fontSize: "13px",
            ...style.normal,
            ...(hover ? style.hover : null),
          }}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <br />
          <div style={{ fontWeight: "bold", paddingLeft: "5px" }}>
            {" "}
            {props.title}
          </div>
          <br />
          <div style={{ color: "red", fontSize: "10px", paddingLeft: "5px" }}>
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
