import React from "react";
import tokyorakugaki_image from "../images/tokyorakugaki_header.svg";

const tokyorakugaki_header = {
  background: `url(${tokyorakugaki_image}) no-repeat center center fixed`,
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

export default tokyorakugaki_header;
