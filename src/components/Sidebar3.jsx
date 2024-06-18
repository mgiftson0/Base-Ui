import React, { useState } from "react";
import logo from "../images/logo.svg";
import "../Style.css"; 

const navItems = [
  { label: "home", icon: "home" },
  { label: "settings", icon: "settings" },
  { label: "build", icon: "build" },
  { label: "cloud", icon: "cloud" },
  { label: "mail", icon: "mail" }
];

export const Sidebar3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="page sidebar-3-page">
      <aside className={`sidebar-3 ${isOpen ? "open" : ""}`}>
        <div className="inner">
          <header>
            <button
              type="button"
              className="sidebar-3-burger"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-icons">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
            <img src={logo} alt="logo" />
          </header>
          <nav>
            {navItems.map((item) => (
              <button key={item.label} type="button">
                <span className="material-icons">{item.icon}</span>
                <span className={isOpen ? "label-visible" : "label-hidden"}>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};

export default Sidebar3;
