import { Link } from "react-router-dom";

import PrivateRoute from "../../utils/routes/PrivateRoute";

import "./style.min.css";

const NewWork = () => {
  const content = (
    <>
      <Link to="/dashboard">back to dashboard</Link>
    </>
  );

  return <PrivateRoute path="/new-work" title="new work" content={content} />;
};

export default NewWork;
