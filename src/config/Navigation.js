import React from "react";
import { Link } from "gatsby";
import { NavigationMenuDemo } from "./NavigationMenuDemo"; // Import the NavigationMenuDemo component

const Navigation = ({ links }) => (
  <header>
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Navigation;
