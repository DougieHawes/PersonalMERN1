import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

import { signOut } from "../../redux/auth/authActions";

import "./style.min.css";

const PrivateNav = ({ isAuthenticated, signOut }) => {
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
        <li className="navbar-link">
          <i className="fas fa-sign-out-alt" onClick={signOut}></i>
        </li>
      </ul>
    </nav>
  );
};

PrivateNav.propTypes = {
  signOut: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signOut })(PrivateNav);
