import PrivateRoute from "../../utils/routes/PrivateRoute";

const Dashboard = () => {
  const content = (
    <>
      <p>DASHBOARD CONTENT</p>
    </>
  );

  return <PrivateRoute path="/dashboard" title="dashboard" content={content} />;
};

export default Dashboard;
