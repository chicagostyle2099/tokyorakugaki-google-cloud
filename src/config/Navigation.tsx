import React, { useState } from "react";
import { Link } from "gatsby";
import "./Navigation.css"; // Make sure to adjust the path as necessary

// Define an interface for the shape of link objects
interface LinkItem {
  to: string;
  label: string;
  links?: { to: string; label: string }[]; // Define the links property as optional
}

// Define the Navigation component
const Navigation: React.FC<{ links: LinkItem[] }> = ({ links }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header>
      <nav className="navbar">
        <ul className="navList">
          {links.map((link) => (
            <li
              key={link.to}
              onMouseEnter={() => setHoveredLink(link.to)}
              onMouseLeave={() => setHoveredLink(null)}
              onClick={() => setHoveredLink(null)}
              className="navItem"
            >
              <Link to={link.to} className="navLink">{link.label}</Link>
              {link.links && link.to === hoveredLink && (
                <ul className="dropdownContent" style={{ display: 'block' }}>
                  {link.links.map((sublink) => (
                    <li key={sublink.to} className="subNavItem">
                      <Link to={sublink.to} className="subNavLink">{sublink.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
