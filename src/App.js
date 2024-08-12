import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar3 } from "./components/Sidebar3";
import LoginPage from "./components/LoginPage"; // Import the LoginPage
import backgroundImg from "./images/bg.jpeg"; // Import your background image
import "./App.css"; // Import your CSS for additional styles

const App = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImg})`, // Apply background image dynamically
    backgroundSize: "cover",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif", // Example of additional styles
    color: "#fff",
  };

  return (
    <Router>
      <div className="App" style={appStyle}>
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* Default route for LoginPage */}
          <Route path="/dashboard" element={<Sidebar3 />} /> {/* Route for Sidebar3 */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;