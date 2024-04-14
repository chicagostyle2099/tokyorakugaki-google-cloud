import React from "react";
import { Link } from "gatsby";

// Define an interface for the shape of link objects
interface LinkItem {
  to: string;
  label: string;
}

// Define the Navigation component
const Navigation: React.FC<{ links: LinkItem[] }> = ({ links }) => (
  <nav style={{ position: "absolute", top: "20px", left: "20px" }}>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {links.map((link) => (
        <li key={link.to} style={{ display: "inline", margin: "0 10px" }}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
