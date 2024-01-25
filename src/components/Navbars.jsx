import React, { useState } from "react";
import { ruangEngineer } from "../asset";
const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="nav-logo" src={ruangEngineer} alt="Ruang Engineer" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbars;