import React from "react";

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #ccc" }}>
      &copy; {new Date().getFullYear()} Tanvi Gupta
    </footer>
  );
}

export default Footer;
