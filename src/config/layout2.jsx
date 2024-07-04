import React from "react";
import Navigation from "./Navigation";
import kanji_background from "./kanji_background";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../widgets/hovercard/hovercard";
import links from "./links";

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  fontSize: '4vw', // Use viewport width for responsiveness
};

const yujiSyukuRegularStyle = {
  fontFamily: "Abys",
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "5vw", // Use viewport width for responsiveness
};

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh", // Adjust the height for better responsiveness
  paddingTop: "20px",
  paddingBottom: "20px",
  paddingLeft: "10px",
  paddingRight: "10px",
};

const Abys = {
  '@font-face': {
    fontFamily: 'Abys',
    src: "url('Abys-Regular.otf')",
  },
};

const LayoutTokyo2 = ({ kanji, romaji, hiragana }) => {
  const hoverCardStyles = {
    fontFamily: 'Abys', // Replace 'Abys' with the name of your custom font
  };

  const kanjiStyle = {
    color: "#AE181E",
    position: "absolute",
    fontSize: "20vw", // Use viewport width for responsiveness
    zIndex: 1,
    margin: 0,
    padding: 0,
    top: "27.2%",
    left: "21.3%",
  };

  const romajiStyle = {
    color: "#000000",
    position: "absolute",
    fontSize: "20vw", // Use viewport width for responsiveness
    zIndex: 1,
    margin: 0,
    padding: 0,
    top: "27.7%",
    right: "20.5%",
  };

  return (
    <main style={{ ...kanji_background, ...yujiSyukuRegularStyle, ...layoutStyles }}>
      <header>
        <Navigation links={links} />
      </header>
      <title>Kanji Template Page</title>
      <h1 style={headingStyles}>
        {/* Adjusted margin instead of using <br /> */}
      </h1>
      <p style={kanjiStyle}>
        <HoverCard>
          <HoverCardTrigger style={hoverCardStyles}>{kanji}{" "}</HoverCardTrigger>
          <HoverCardContent>
            {hiragana}{" "}
          </HoverCardContent>
        </HoverCard>
      </p>
      <p style={romajiStyle}>
        {romaji}{" "}
      </p>
      <div>
        {/* Display the populated data here */}
      </div>
    </main>
  );
};

export default LayoutTokyo2;
