import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand bg-body-tertiary"
      aria-label="Main navigation"
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="/assets/r-high-resolution-white-grayscale-transparent.png"
            alt="Raddish – Home"
            height={48}
          />
        </Link>

        <div className="navbar-nav ms-auto">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? "active fw-semibold" : ""}`
            }
          >
            Home
          </NavLink>

          <a
            className="nav-link"
            href="https://github.com/RaddishAI"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
