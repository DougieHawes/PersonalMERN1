import { connect } from "react-redux";
import { Route, Link, Redirect } from "react-router-dom";

import PropTypes from "prop-types";

import { signOut } from "../../../redux/auth/authActions";

import PrivateNav from "../../layout/PrivateNav";

import "./style.min.css";

const PrivateRoute = ({ isAuthenticated, path, title, content }) => {
  return (
    <Route exact path={path}>
      <PrivateNav />
      <div className="route">
        <h2 className="route-title">{title}</h2>
        <div className="route-content">{content}</div>
      </div>
      <div className="private-link">
        <Link to="/">public view</Link>
      </div>
      {!isAuthenticated && <Redirect to="/" />}
    </Route>
  );
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(PrivateRoute);
