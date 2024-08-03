import React from "react";
import Navigation from "./Navigation";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../widgets/hovercard/hovercard";
import links from "./links";
import "./tokyorakugaki_background.css"; // Import the CSS file

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: "100%", // Make the heading width responsive
  fontSize: '2rem', // Use rem for font size
};

const yujiSyukuRegularStyle = {
  fontFamily: "Abys",
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "2rem", // Use rem for font size
};

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", // Adjust the height for better responsiveness
  paddingTop: "20px",
  paddingBottom: "20px",
  paddingLeft: "10px",
  paddingRight: "10px",
  overflowX: "hidden", // Prevent horizontal overflow
};

const kanjiStyle = {
  color: "#AE181E",
  position: "absolute",
  fontSize: "10vw", // Use viewport width for responsiveness
  zIndex: 1,
  margin: 0,
  padding: 0,
  top: "27.2%",
  left: "21.3%",
};

const romajiStyle = {
  color: "#000000",
  position: "absolute",
  fontSize: "10vw", // Use viewport width for responsiveness
  fontFamily: 'Abys',
  zIndex: 1,
  margin: 0,
  padding: 0,
  top: "27.7%",
  right: "20.5%",
};

// Media queries for better responsiveness
const styles = `
  @media (max-width: 768px) {
    .kanjiStyle {
      font-size: 15vw;
      top: 30%;
      left: 10%;
    }
    .romajiStyle {
      font-size: 15vw;
      top: 35%;
      right: 10%;
    }
  }
  @media (max-width: 480px) {
    .kanjiStyle {
      font-size: 20vw;
      top: 35%;
      left: 5%;
    }
    .romajiStyle {
      font-size: 20vw;
      top: 40%;
      right: 5%;
    }
  }
`;

const LayoutTokyo2 = ({ kanji, romaji, hiragana }) => {
  const hoverCardStyles = {
    fontFamily: 'Abys', // Replace 'Abys' with the name of your custom font
  };

  return (
    <main className="mainBackground" style={{...yujiSyukuRegularStyle,  ...layoutStyles }}>
      <header className="kanjiheader" style={yujiSyukuRegularStyle}>
        <Navigation links={links} />
        {/* <img src="./images/kanji_background2.svg" alt="Kanji Header" className="headerImage" /> */}
      </header>
      <title>Kanji Template Page</title>
      <h1 style={headingStyles}>
        {/* Adjusted margin instead of using <br /> */}
      </h1>
      <style>{styles}</style>
      <p className="kanjiStyle" style={kanjiStyle} zIndex={1}>
        <HoverCard>
          <HoverCardTrigger style={hoverCardStyles}>{kanji}{" "}</HoverCardTrigger>
          <HoverCardContent>
            {hiragana}{" "}
          </HoverCardContent>
        </HoverCard>
      </p>
      <p className="romajiStyle" style={romajiStyle}>
        {romaji}{" "}
      </p>
      <div>
        {/* Display the populated data here */}
      </div>
    </main>
  );
};

export default LayoutTokyo2;
