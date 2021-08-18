import { Route } from "react-router-dom";

const PrivateRoute = ({ path, title, content }) => {
  return (
    <Route exact path={path}>
      <div className="route">
        <h2 className="route-title">{title}</h2>
        <div className="route-content">{content}</div>
      </div>
    </Route>
  );
};

export default PrivateRoute;
