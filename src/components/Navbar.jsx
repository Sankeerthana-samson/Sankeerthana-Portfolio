import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Core Competencies", "#core-competencies"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["AI Automation", "#projects"],
    ["Certifications", "#certifications"],
    ["Contact", "#contact"],
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <a className="logo" href="#home" onClick={closeMenu}>
        SANKEERTHANA <span>MARUPALLI</span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
      </div>

      <a className="nav-cta" href="#contact" onClick={closeMenu}>
        Let&apos;s Connect <span aria-hidden="true">↗</span>
      </a>
    </nav>
  );
}

export default Navbar;