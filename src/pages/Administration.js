import React from "react";
import Background from "./../images/background.jpg";
import { useState } from "react";
import style from "./styles.js";
import AdministrationImageCard from "../components/AdministrationImageCard";

const Administration = () => {
  const myStyle = {
    backgroundImage: `url(${Background})`,

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "120vh",
  };
  const [hoverLeft, setHoverLeft] = useState(false);
  const [hoverRight, setHoverRight] = useState(false);
  const [hoverTop, setHoverTop] = useState(false);
  const [hoverBottom, setHoverBottom] = useState(false);

  return (
    <>
    <>
      <div style={ myStyle }>
        <div
          style={ {
            display: "flex",
            flexDirection: "column",
            paddingTop: "300px",
            paddingLeft: "40px",
            justifyContent: "center",
            alignItems: "flex-start",
            marginRight: "2rem",
          } }
        >
          <div
            style={ {
              fontWeight: "bold",
              fontSize: "33px",
            } }
          >
            { " " }
            Your Journey At
          </div>

          <text
            style={ {
              fontWeight: "bolder",
              fontSize: "35px",
            } }
          >
            Nuversity Starts Here
          </text>
          <br />
          <text
            style={ {
              fontSize: "13px",
            } }
          >
            The members of Nuversity respect disciplined analytical thinking,
            <br />
            innovation, hands-on problem solving, and bold new ideas because
            <br />
            they are intensely intersted and driven to explore.
          </text>
        </div>
      </div>
      <body>
        <div
          style={ {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "7rem",
            marginBottom: "5rem",
          } }
        >
          <div
            style={ {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              marginRight: "2rem",
            } }
          >
            <h1
              style={ {
                fontWeight: "bold",
                color: "darkred",
                fontSize: "45px",
              } }
            >
              { " " }
              Our Mission
              <br />
            </h1>
            <br />
            <text
              style={ {
                fontStyle: "SegoeUISemibold",
                color: "grey",
                fontSize: "13px",
              } }
            >
              We look for applicants with similar abilities, interests, and
              <br />
              values in our undergraduate, and professional admissions.<br />
              We are very varied community, drawing students from all
              <br />
              countries, because Nuversity is established for innovatiion
              <br />
              of talents amd good ideas.
            </text>
          </div>
          <div style={ { marginLeft: "6rem" } }>
            <img
              src="/images/admission1.jpg"
              alt="admission1"
              height="100%"
              width="auto" />
            ;
          </div>
        </div>
      </body>
      <div
        style={ {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        } }
      >
        <h1
          style={ {
            fontWeight: "bold",
            color: "darkred",
            justifyContent: "center",
            fontSize: "40px",
            paddingLeft: "475px",
          } }
        >
          { " " }
          Undergraduate Admissions
          <br />
        </h1>
        <br />
        <text
          style={ {
            display: "flex",
            fontStyle: "SegoeUISemibold",
            color: "Black",
            justifyContent: "center",
            fontSize: "13px",
          } }
        >
          Top 10 Big Data and Data Science Influencer, Director -Adversitement
          <br />
        </text>
        <text
          style={ {
            display: "flex",
            fontStyle: "SegoeUISemibold",
            color: "Black",
            justifyContent: "center",
            fontSize: "13px",
          } }
        >
          Named by Onalytica as one of the three most influential people in Big
          Data, Ronald is also an author of a number of
          <br />
        </text>
        <text
          style={ {
            display: "flex",
            fontStyle: "SegoeUISemibold",
            color: "Black",
            justifyContent: "center",
            fontSize: "13px",
          } }
        >
          leading Big Data and Data Science websites, including Datafloq, Data
          Science Central, and The Guardian. He also
          <br />
        </text>
        <text
          style={ {
            display: "flex",
            fontStyle: "SegoeUISemibold",
            color: "Black",
            justifyContent: "center",
            fontSize: "13px",
          } }
        >
          regularly speaks at renowned events.
          <br />
        </text>
      </div>
      <h1
        style={ {
          fontWeight: "bold",
          color: "darkred",
          justifyContent: "center",
          fontSize: "40px",
          display: "flex",
        } }
      >
        <br />
        <br /> Top Resources
      </h1>
      <br />
      <br />
      <AdministrationImageCard />
      <div
        style={ {
          marginLeft: "6rem",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        } }
      >
        <img
          src="/images/admission2.jpg"
          alt="admission3"
          height="100%"
          width="auto" />
        <textbox
          style={ {
            border: "2px solid light grey",
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            fontSize: "13px",
            ...style.normal,
            ...( hoverLeft ? style.hover : null ),
          } }
          onMouseEnter={ () =>
          {
            setHoverLeft( true );
          } }
          onMouseLeave={ () =>
          {
            setHoverLeft( false );
          } }
        >
          <br />
          <div style={ { fontWeight: "bold", paddingLeft: "5px" } }>
            { " " }
            Undergraduate Admissions
          </div>
          <br />
          <div style={ { color: "red", fontSize: "10px", paddingLeft: "5px" } }>
            { " " }
            Learn more
          </div>
          <br />
        </textbox>
      </div>
    </><div
      style={ {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      } }
    >
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1
          style={ {
            fontWeight: "bold",
            color: "darkred",
            justifyContent: "center",
            fontSize: "40px",
            paddingLeft: "420px",
          } }
        >
          { " " }
          Professional & Executive Education
          <br />
        </h1>
        <br />
        <text
          style={ {
            display: "flex",
            fontStyle: "SegoeUISemibold",
            color: "Black",
            justifyContent: "center",
            fontSize: "12px",
          } }
        >
          For professionals in the workforce and for learners anywhere eager for
          Nuversity content without the full-time
          <br />
        </text>
        <text
          style={ {
            display: "flex",
            fontStyle: "SegoeUISemibold",
            color: "Black",
            justifyContent: "center",
            fontSize: "12px",
          } }
        >
          commitment of a traditional degree program, we offer a range of
          educational options--some online,some on
          <br />
        </text>
        <text
          style={ {
            display: "flex",
            fontStyle: "SegoeUISemibold",
            color: "Black",
            justifyContent: "center",
            fontSize: "12px",
          } }
        >
          campus, and some a blend of both.
          <br />
        </text>
      </div><br /><h1
        style={ {
          fontWeight: "bold",
          color: "darkred",
          justifyContent: "center",
          fontSize: "40px",
          display: "flex",
        } }
      >
        <br />
        <br /> Top Resources
      </h1><br /><br /><div
        style={ {
          display: "flex",
          borderRadius: "30px",
          justifyContent: "center",
        } }
      >
        <div
          style={ {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            ...style.normal,
            ...( hoverRight ? style.hover : null ),
          } }
          onMouseEnter={ () =>
          {
            setHoverRight( true );
          } }
          onMouseLeave={ () =>
          {
            setHoverRight( false );
          } }
        >
          <img
            src="/images/admission3.jpg"
            alt="admission3"
            height="100%"
            width="auto" />
          <textbox
            style={ {
              border: "5px darkgray",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              fontSize: "13px",
            } }
          >
            <br />
            <div style={ { fontWeight: "bold", paddingLeft: "5px" } }>
              { " " }
              Undergraduate Admissions
            </div>
            <br />
            <div style={ { color: "red", fontSize: "10px", paddingLeft: "5px" } }>
              { " " }
              Learn more
            </div>
            <br />
          </textbox>
        </div>

        <div
          style={ {
            marginLeft: "6rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          } }
        >
          <img
            src="/images/admission2.jpg"
            alt="admission3"
            height="100%"
            width="auto" />
          <textbox
            style={ {
              border: "2px solid red",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              fontSize: "13px",
            } }
          >
            <br />
            <div style={ { fontWeight: "bold", paddingLeft: "5px" } }>
              { " " }
              Undergraduate Admissions
            </div>
            <br />
            <div style={ { color: "red", fontSize: "10px", paddingLeft: "5px" } }>
              { " " }
              Learn more
            </div>
            <br />
          </textbox>
        </div>
      </div><br /><br /><br /><br />
    </>
    </>
    );
  
};

export default Administration;
