import React from "react";
import backgroundImage2 from "../images/kanji_background2.png";

const kanji_background = {
  background: `url(${backgroundImage2}) no-repeat center center fixed`,
  backgroundSize: "cover", 
  backgroundAttachment: "scroll",
  position: "relative",
  zIndex: 1,
  margin: "0%",
  padding: "0%", // Remove excessive padding
  width: "100%",
  height: "100%", // Ensure the background covers the entire area
  overflowX: "hidden", // Prevent horizontal overflow
};

export default kanji_background;
