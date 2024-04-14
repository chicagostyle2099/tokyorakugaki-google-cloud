import React, { useState } from "react";
import { Link } from "gatsby";

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
      <nav style={{ position: "absolute", top: "20px", left: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {links.map((link) => (
            <li
              key={link.to}
              onMouseEnter={() => setHoveredLink(link.to)}
              onMouseLeave={() => setHoveredLink(null)}
              style={{ display: "inline-block", marginRight: "10px", position: "relative" }}
            >
              <Link to={link.to}>{link.label}</Link>
              {link.links && link.to === hoveredLink && (
                <ul style={{ listStyle: "none", padding: 0, position: "absolute", top: "100%", left: 0, zIndex: 1 }}>
                  {link.links.map((sublink) => (
                    <li key={sublink.to} style={{ marginLeft: "10px" }}>
                      <Link to={sublink.to}>{sublink.label}</Link>
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
