import React from "react";
import backgroundImage from "../images/tokyorakugaki_background.png";

const tokyorakugaki_background = ` 
.mainBackground {
  background: url(${backgroundImage}) no-repeat center center fixed;
  backgroundSize: "cover";
  backgroundAttachment: "scroll";
  position: "relative";
  zIndex: 1;
  margin: 0;
  padding: 0;
  width: "100%";
  height: "100vh";
  overflowX: "hidden";
}

.kanjiStyle {
  font-size: 5vw; /* Default size for desktop */
  top: 20%;
  left: 15%;
  position: absolute;
  color: #AE181E;
}

.romajiStyle {
  font-size: 5vw; /* Default size for desktop */
  top: 25%;
  right: 15%;
  position: absolute;
  color: #000000;
}

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

export default tokyorakugaki_background;
