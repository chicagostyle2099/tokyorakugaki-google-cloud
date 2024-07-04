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

const additionalSectionStyles = {
  backgroundColor: "#f9f9f9",
  padding: "50px 20px",
  textAlign: "center",
  marginTop: "50px",
  borderTop: "1px solid #ddd",
  fontFamily: 'Arial',
};

const Abys = {
  '@font-face': {
    fontFamily: 'Abys',
    src: "url('Abys-Regular.otf')",
  },
};

const Otsutome = {
  '@font-face': {
    fontFamily: 'Otsutome',
    src: "url('OtsutomeFont_Ver3_16.ttf')",
  },
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
