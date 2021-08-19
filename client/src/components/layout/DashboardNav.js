import { NavLink } from "react-router-dom";

import "./style.min.css";

const DashboardNav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-link">
          <NavLink
            to="/new-work"
            className="navlink"
            activeClassName="navlink-active"
          >
            NEW-WORK
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink
            to="/new-blog"
            className="navlink"
            activeClassName="navlink-active"
          >
            NEW-BLOG
          </NavLink>
        </li>
        <li className="navbar-link">
          <NavLink
            to="/edit-bio"
            className="navlink"
            activeClassName="navlink-active"
          >
            EDIT-BIO
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default DashboardNav;
