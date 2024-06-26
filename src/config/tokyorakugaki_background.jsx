import React from "react";
import backgroundImage from "../images/tokyorakugaki_background.png";
import zIndex from "@material-ui/core/styles/zIndex";

const tokyorakugaki_background = {
  background: `url(${backgroundImage}) no-repeat center center fixed`,
  backgroundSize: "cover",
  backgroundAttachment: "scroll",
  position: "relative",
  zIndex: "1%",
  margin: "0%",
  padding: "35%",
  //width: "70%",
  // height: "5%",
  zIndex: 0,
};

export default tokyorakugaki_background;
