import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import PropTypes from "prop-types";

import Navbar from "../../layout/Navbar";

import "./style.min.css";

const AuthRoute = ({ isAuthenticated, path, title, content }) => {
  return (
    <Route exact path={path}>
      <Navbar />
      <div className="route">
        <h2 className="route-title">{title}</h2>
        <div className="route-content">{content}</div>
      </div>
      {isAuthenticated && <Redirect to="/dashboard" />}
    </Route>
  );
};

AuthRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(AuthRoute);
