import React from "react";
import backgroundImage from "../images/tokyorakugaki_background.png";
import backgroundImage2 from "../images/kanji_background.png";

const kanji_background = {
  background: `url(${backgroundImage2}) no-repeat center center fixed`,
  backgroundSize: "cover",
  backgroundAttachment: "scroll",
  position: "relative",
  zIndex: 1,
  margin: 0,
  padding: 400,
  // width: "50%",
  height: "5%",
};

export default kanji_background;
