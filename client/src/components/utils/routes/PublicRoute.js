import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import PropTypes from "prop-types";

import PublicNav from "../../layout/PublicNav";

import "./style.min.css";

const PublicRoute = ({ isAuthenticated, path, title, content }) => {
  return (
    <Route exact path={path}>
      <PublicNav />
      <div className="route">
        <h2 className="route-title">{title}</h2>
        <div className="route-content">{content}</div>
      </div>
      {isAuthenticated && (
        <div className="private-link">
          <Link to="/dashboard">private view</Link>
        </div>
      )}
    </Route>
  );
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(PublicRoute);
