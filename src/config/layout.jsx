import React from "react";
import Navigation from "./Navigation";
import tokyorakugaki_background from "./tokyorakugaki_background";
import { NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../widgets/navbar/shadcn_navbar";
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
  minHeight: "150vh",
};

const headerStyles = {
  borderBottom: "2px solid black", // Border at the bottom
};

const Layout_Tokyo = ({ children }) => {
  return (
    <div>
      <header style={headerStyles}>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Kanji</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <Navigation links={links} />
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Title */}
        <h1 style={headingStyles}>
          <br />
        </h1>
      </header>

      {/* Main content */}
      <main style={{ ...tokyorakugaki_background, ...yujiSyukuRegularStyle, ...layoutStyles }}>
        {/* Your main content goes here */}
        
      </main>
    </div>
  );
};

export default Layout_Tokyo;
