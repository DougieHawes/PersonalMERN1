import { Link } from "react-router-dom";

import PrivateRoute from "../../utils/routes/PrivateRoute";

import "./style.min.css";

const Dashboard = () => {
  const content = <></>;

  return <PrivateRoute path="/dashboard" title="dashboard" content={content} />;
};

export default Dashboard;
