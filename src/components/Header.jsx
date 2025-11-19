import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ padding: "10px", textAlign: "center", borderBottom: "1px solid #8d8989ff" }}>
      <Link to="/" style={{ margin: "0 15px" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 15px" }}>About</Link>
      <Link to="/projects" style={{ margin: "0 15px" }}>Projects</Link>
      <Link to="/contact" style={{ margin: "0 15px" }}>Contact</Link>
    </nav>
  );
}

export default Header;
