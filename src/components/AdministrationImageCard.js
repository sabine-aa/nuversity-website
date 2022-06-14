const AdministrationImageCard = () => {
    return (<div
        style={{
          display: "flex",
          borderBottomLeftRadius: "30px",
          borderBottomRightRadius: "30px",
          justifyContent: "center",
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
            src="/images/admission3.jpg"
            alt="admission3"
            height="100%"
            width="auto"
          />
          <textbox
            style={{
              border: "2px ",
              borderBottomLeftRadius: "10px",
              borderBottomRightRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              fontSize: "13px",
              ...style.normal,
              ...(hoverTop ? style.hover : null),
            }}
            onMouseEnter={() => {
              setHoverTop(true);
            }}
            onMouseLeave={() => {
              setHoverTop(false);
            }}
          >
            <br />
            <div style={{ fontWeight: "bold", paddingLeft: "5px" }}>
              {" "}
              Undergraduate Admissions
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
        )
}

export default AdministrationImageCard