import { Link } from "react-router-dom";

import PrivateRoute from "../../utils/routes/PrivateRoute";

import "./style.min.css";

const Dashboard = () => {
  const content = (
    <div className="dashboard">
      <h3 className="dashboard-subtitle">
        please use links above to edit your site's content
      </h3>
    </div>
  );

  return <PrivateRoute path="/dashboard" title="dashboard" content={content} />;
};

export default Dashboard;
