import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? "active fw-semibold" : ""}`;

  return (
    <nav
      className="navbar navbar-expand-md bg-body-tertiary"
      aria-label="Main navigation"
    >
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img
            src="/assets/r-high-resolution-white-grayscale-transparent.png"
            alt="Raddish – Home"
            height={48}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          id="main-navigation"
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
        >
          <div className="navbar-nav ms-auto">
            <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
              About
            </NavLink>

            <NavLink to="/work" className={navLinkClass} onClick={closeMenu}>
              Work
            </NavLink>

            <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
              Contact
            </NavLink>

            <a
              className="nav-link"
              href="https://github.com/RaddishAI"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
