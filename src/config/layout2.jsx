import React from "react";
import Navigation from "./Navigation";
import kanji_background from "./kanji_background";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} //from "../../components/ui/hover-card"; 
 from "../widgets/hovercard/hovercard";

//  import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "../widgets/navbar/shadcn_navbar";

 import links from "./links";



// const links = [
//   { to: "/", text: "Home" },
//   { to: "/bou/bou_棒", text: "bou_棒" },
//   { to: "/bu/bu_武", text: "bu_武" },
// ];

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
  fontWeight: 500,
  fontStyle: "normal",
  fontSize: "30px",
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

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "150vh", // Ensure the layout stretches to fill the entire viewport height
  // borderTop: "10% solid black", // Border at the top
  // borderBottom: "10% solid black", // Border at the bottom
};

const Layout_Tokyo2 = ({ kanji, romaji, hiragana }) => {
  return (
    <main style={{ ...kanji_background, ...yujiSyukuRegularStyle, ...layoutStyles }}>
      <title>Kanji Template Page</title>
      <h1 style={headingStyles}>
        <br />
        <br />
        <br />
      </h1>
      <p
        style={{
          ...paragraphStyles,
          color: "#AE181E",
          top: "41.8%",
          left: "19.7%",
          position: "absolute",
          fontSize: "500%",
          zIndex: 1,
          margin: 0,
          padding: 0,
        }}
      >
        {kanji}{" "}
      </p>

      <p
        style={{
          ...paragraphStyles,
          color: "#000000",
          top: "43.2%",
          right: "19.7%",
          position: "absolute",
          fontSize: "500%",
          zIndex: 1,
          margin: 0,
          padding: 0,
        }}
      >
        <HoverCard>
  <HoverCardTrigger>{romaji}{" "}</HoverCardTrigger>
  <HoverCardContent>
      {hiragana}{" "}
  </HoverCardContent>
</HoverCard>

        {/* {romaji}{" "} */}
      </p>
      <Navigation links={links} />

      {/* <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      /> */}

      <div>
        {/* Display the populated data here */}
        {/* <p>{apiData}</p> */}
      </div>
    </main>
  );
};

export default Layout_Tokyo2;
