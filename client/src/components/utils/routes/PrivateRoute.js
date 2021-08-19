import { Route } from "react-router-dom";

import DashboardNav from "../../layout/DashboardNav";

import "./style.min.css";

const PrivateRoute = ({ path, title, content }) => {
  return (
    <Route exact path={path}>
      <DashboardNav />
      <div className="route">
        <h2 className="route-title">{title}</h2>
        <div className="route-content">{content}</div>
      </div>
    </Route>
  );
};

export default PrivateRoute;
