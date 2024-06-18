import React from "react";
import { Sidebar3 } from "./components/Sidebar3";
import backgroundImg from "./images/bg.jpeg"; // Import your background image
import "./App.css"; // Import your CSS for additional styles

const App = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImg})`, // Apply background image dynamically
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh", // Ensure the background covers the entire viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif", // Example of additional styles
    color: "#fff",
  };

  return (
    <div className="App" style={appStyle}>
      <Sidebar3 />
      <div className="content">
        {/* Your main content goes here */}
        {/* <h1>Main Content Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </div>
    </div>
  );
};

export default App;
