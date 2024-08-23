import React from "react";

const HomeScreen = () => {
  return (
    <div style={styles.container}>
      <img
        src="https://www.rajagiritech.ac.in/home/Placement/assets/img/rset.png"
        style={styles.logo}
        alt="Logo"
      />
      <h1 style={styles.heading}>Welcome to Cyberblitz</h1>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#e8e8a317", // Gradient background
    textAlign: "center",
  },
  logo: {
    height: "150px", // Fixed height for the logo
    borderRadius: "15px", // Rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
    marginBottom: "20px", // Space between logo and heading
  },
  heading: {
    fontSize: "4rem", // Responsive font size
    fontFamily: "'Roboto', sans-serif", // Modern font
    color: "#e8a317", // Darker text color for better readability
    fontWeight: "bold",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)", // Subtle text shadow
  },
};

export default HomeScreen;
