import { Link } from "react-router-dom";

import PrivateRoute from "../../utils/routes/PrivateRoute";

import "./style.min.css";

const NewBlog = () => {
  const content = (
    <>
      <Link to="/dashboard">back to dashboard</Link>
    </>
  );

  return <PrivateRoute path="/new-blog" title="new blog" content={content} />;
};

export default NewBlog;
