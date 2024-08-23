import React from "react";
import Navbar from "./components/NavBar"; // Import the Navbar component
import HomeScreen from "./components/HomeScreen";
import SvgTrails from "./components/ui/SvgTrails";

const App = () => {
  return (
    <div>
      <Navbar />
      <SvgTrails />
      <HomeScreen />
    </div>
  );
};

export default App;
