import { Route } from "react-router-dom";

import "./style.min.css";

const AdminRoute = ({ path, title, content }) => {
  return (
    <Route exact path={path}>
      <div className="route">
        <h2 className="route-title">{title}</h2>
        <div className="route-content">{content}</div>
      </div>
    </Route>
  );
};

export default AdminRoute;
