import React from "react";
import Navigation from "./Navigation";
import tokyorakugaki_background from "./tokyorakugaki_background";

const links = [
  { to: "/", text: "Home" },
  { to: "/bou", text: "bou" },
  { to: "/bu", text: "bu" },
];

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

const headingAccentStyles = {
  color: "#663399",
};

const paragraphStyles = {
  marginBottom: 1000,
};

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const yujiSyukuRegularStyle = {
  fontFamily: "Yuji Syuku, serif",
  fontWeight: 600,
  fontStyle: "normal",
  fontSize: "24px",
};

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};

const docLinkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const Layout_Tokyo = ({ children }) => {
  return (
    <main style={{ ...tokyorakugaki_background, ...yujiSyukuRegularStyle }}>
      {/* <title>Home Page</title> */}
      {
        <h1 style={headingStyles}>
          <br />
        </h1>
      }

      <Navigation links={links} />

      <div>
        {/* Display the populated data here */}
        {/* <p>{apiData}</p> */}
      </div>
    </main>
  );
};

export default Layout_Tokyo;
