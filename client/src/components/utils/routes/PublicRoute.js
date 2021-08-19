import { Route } from "react-router-dom";

import Navbar from "../../layout/Navbar";

import "./style.min.css";

const PublicRoute = ({ path, title, content }) => {
  return (
    <Route exact path={path}>
      <Navbar />
      <div className="route">
        <h2 className="route-title">{title}</h2>
        <div className="route-content">{content}</div>
      </div>
    </Route>
  );
};

export default PublicRoute;
