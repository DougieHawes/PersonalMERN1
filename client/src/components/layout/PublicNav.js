import { NavLink } from "react-router-dom";

import "./style.min.css";

const PublicNav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-link">
          <NavLink
            to="/work"
            className="navlink"
            activeClassName="navlink-active"
          >
            WORK
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink
            to="/blog"
            className="navlink"
            activeClassName="navlink-active"
          >
            BLOG
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink
            to="/bio"
            className="navlink"
            activeClassName="navlink-active"
          >
            BIO
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PublicNav;
