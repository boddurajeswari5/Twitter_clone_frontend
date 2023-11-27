
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Trends from "./Trends";
import Twittes from "./Twittes";

const Home = () => {
    
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Decide whether to show Trends based on windowWidth
  const showTrends = windowWidth > 768; // Adjust the width as needed

  return (
    <div>
      <Sidebar />
      <Twittes />
      {showTrends && <Trends />}
    </div>
  );
};

export default Home;
