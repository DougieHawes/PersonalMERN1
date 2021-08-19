import { Link } from "react-router-dom";

import PrivateRoute from "../../utils/routes/PrivateRoute";

import "./style.min.css";

const EditBio = () => {
  const content = (
    <>
      <Link to="/dashboard">back to dashboard</Link>
    </>
  );

  return <PrivateRoute path="/edit-bio" title="edit bio" content={content} />;
};

export default EditBio;
