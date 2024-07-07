import React from "react";
import backgroundImage from "../images/tokyorakugaki_background.png";

const tokyorakugaki_background = {
  background: `url(${backgroundImage}) no-repeat center center fixed`,
  backgroundSize: "cover",
  backgroundAttachment: "scroll",
  position: "relative",
  zIndex: 1,
  margin: 0,
  padding: 0,
  width: "100%",
  height: "100vh",
  overflowX: "hidden",
};

export default tokyorakugaki_background;
