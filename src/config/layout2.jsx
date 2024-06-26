import React from "react";
import Navigation from "./Navigation";
import kanji_background from "./kanji_background";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../widgets/hovercard/hovercard";

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
};

const yujiSyukuRegularStyle = {
  fontFamily: "Abys",
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "30px",
};

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "270vh", // Increase this value to make the page longer
  paddingTop: "0px", // Add padding to the top to prevent overlap
  paddingBottom: "100px", // Add padding to the bottom to ensure content is not cut off
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
  return (
    <main style={{ ...kanji_background, ...yujiSyukuRegularStyle, ...layoutStyles }}>
      <header>
        <Navigation links={links} />
      </header>
      <title>Kanji Template Page</title>
      <h1 style={headingStyles}>
        <br />
        <br />
        <br />
      </h1>
      <p
        style={{
          marginBottom: 1000,
          color: "#AE181E",
          top: "27.2%",
          left: "21.3%",
          position: "absolute",
          fontSize: "500%",
          zIndex: 1,
          margin: 0,
          padding: 0,
        }}
      >
        <HoverCard>
        <HoverCardTrigger style={hoverCardStyles}>{kanji}{" "}</HoverCardTrigger>
        <HoverCardContent>
              {hiragana}{" "}
          </HoverCardContent>
          </HoverCard>
      </p>
      <p
        style={{
          marginBottom: 1000,
          color: "#000000",
          top: "27.7%",
          right: "20.5%",
          position: "absolute",
          fontSize: "500%",
          zIndex: 1, 
          margin: 0,
          padding: 0,
        }}
      >
      {/* <span style={yujiSyukuRegularStyle}> */}
          {romaji}{" "}
        {/* </span> */}
          {/* <HoverCardContent>
              {hiragana}{" "}
          </HoverCardContent> */}
      </p>
      <div>
        {/* Display the populated data here */}
        {/* <p>{apiData}</p> */}
      </div>
    </main>
  );
};

export default LayoutTokyo2;
 