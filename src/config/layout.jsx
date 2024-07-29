import React from "react";
import Navigation from "./Navigation";
import links from "./links";
import tokyorakugaki_header from "./tokyorakugaki_header"; // Import the image
import "./tokyorakugaki_background.css"; // Import the CSS file


const yujiSyukuRegularStyle = {
  fontFamily: "Abys",
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "2rem", // Use rem for font size
};

const LayoutTokyo = ({ children }) => {
  return (
    <main className="mainBackground yujiSyukuRegular" style={yujiSyukuRegularStyle}>
      <header className="header">
      <Navigation links={links} />
        <div className="headerContent">
          
          {/* <img src={tokyorakugaki_header} alt="Tokyo Rakugaki" className="headerImage" /> */}
        </div>
      </header>
      
      <div className="content">
        {children}
      </div>
      
      <div className="additionalSection">
        <h2>Additional Section</h2>
        <p>This is some additional content below the main content.</p>
      </div>
    </main>
  );
};

export default LayoutTokyo;
