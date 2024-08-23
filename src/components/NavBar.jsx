import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <a href="/" style={styles.link}>
          Cyberblitz
        </a>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="/" style={styles.link}>
            Home
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/about" style={styles.link}>
            About
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/services" style={styles.link}>
            Services
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="/contact" style={styles.link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 40px",
    backgroundColor: "#402531", // Dark brown background
    width: "100vw", // Ensure navbar spans the entire viewport width
    position: "fixed", // Keep the navbar fixed at the top
    top: 0,
    left: 0,
    boxSizing: "border-box",
    zIndex: 1000,
    height: "60px", // Height of the Navbar
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#e8a317", // Golden yellow text for the logo
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: "20px",
  },
  link: {
    color: "#e8a317", // Golden yellow text for the links
    textDecoration: "none",
    fontSize: "18px",
    position: "relative",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#731315", // Dark red color on hover
  },
};

export default Navbar;
