import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav style={{ padding: "20px", textAlign: "center", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ margin: "0 15px" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 15px" }}>About</Link>
      <Link to="/projects" style={{ margin: "0 15px" }}>Projects</Link>
      <Link to="/contact" style={{ margin: "0 15px" }}>Contact</Link>
    </nav>
  );
}

export default Header;
