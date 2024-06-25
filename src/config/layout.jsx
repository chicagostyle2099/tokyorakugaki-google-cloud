import React from "react";
import Navigation from "./Navigation";
import tokyorakugaki_background from "./tokyorakugaki_background";
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
  fontFamily: "Yuji Syuku, serif",
  fontWeight: 600,
  fontStyle: "normal",
  fontSize: "24px",
};

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "200vh", // Increase this value to make the page longer
  paddingTop: "0px", // Add padding to the top to prevent overlap
  paddingBottom: "100px", // Add padding to the bottom to ensure content is not cut off
};

const additionalSectionStyles = {
  backgroundColor: "#f9f9f9",
  padding: "50px 20px",
  textAlign: "center",
  marginTop: "50px",
  borderTop: "1px solid #ddd",
};

const LayoutTokyo = ({ children }) => {
  return (
    <main style={{ ...tokyorakugaki_background, ...yujiSyukuRegularStyle, ...layoutStyles }}>
      <header>
        <Navigation links={links} />
        {/* Add the Navbar component */}
      </header>
      <h1 style={headingStyles}>
        {/* Adjusted margin instead of using <br /> */}
      </h1>
      <div>
        {/* Display the populated data here */}
        {children}
      </div>
      <div style={additionalSectionStyles}>
        <h2>Additional Section</h2>
        <p>This is some additional content below the main content.</p>
      </div>
    </main>
  );
};

export default LayoutTokyo;
