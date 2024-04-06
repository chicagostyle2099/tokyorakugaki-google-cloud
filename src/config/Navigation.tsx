import React from "react";
import { Link } from "gatsby";

// Define an interface for the shape of link objects
interface LinkItem {
  to: string;
  label: string;
}

// Define the Navigation component
const Navigation: React.FC<{ links: LinkItem[] }> = ({ links }) => (
  <header>
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navigation;
