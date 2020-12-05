import React from "react";
import Logo from "../../utils/logo";
import { Link } from "react-router-dom";

export default function Header() {
  const navItems = [
    { name: "Home", linkTo: "/", id: 1 },
    { name: "Facilities", linkTo: "/facilities", id: 2 },
    { name: "Rooms", linkTo: "rooms", id: 3 },
    { name: "Contact-us", linkTo: "contact", id: 4 },
  ];

  return (
    <div className="main-header">
      <Logo />
      <nav className="main-nav">
        {navItems.map((item, i) => (
          <Link
            className={`nav-links ${i === 0 ? "first-link" : ""}`}
            key={item.id}
            to={item.linkTo}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
