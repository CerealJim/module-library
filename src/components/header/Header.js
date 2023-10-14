// Header.js
import React from "react";
import "./Header.scss";

const Header = () => {
  const scrollToModule = (moduleId) => {
    const element = document.getElementById(moduleId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="custom-header bg-blue-500 p-4 text-white">
      <nav className="flex justify-end">
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => scrollToModule("accordion")}
              className="nav-link"
            >
              Accordion
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToModule("modal")}
              className="nav-link"
            >
              Modal
            </button>
          </li>
          <li>
            <button onClick={() => scrollToModule("feed")} className="nav-link">
              Feed
            </button>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-center py-4">Module Library</h1>
      </div>
    </header>
  );
};

export default Header;
