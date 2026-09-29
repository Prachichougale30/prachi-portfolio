import React, { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    document.documentElement.setAttribute(
      "data-theme",
      !darkMode ? "dark" : "light"
    );
  };

  return (
    <nav className="navbar">

      <div className="nav-logo">
        <span>PC</span>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </Link>
<Link to="achievements" smooth duration={500}>
  Achievements
</Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

      </div>

      <div className="nav-actions">

        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

    </nav>
  );
};

export default Navbar;