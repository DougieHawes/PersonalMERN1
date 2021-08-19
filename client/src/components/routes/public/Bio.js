import PublicRoute from "../../utils/routes/PublicRoute";

import "./style.min.css";

const Bio = () => {
  const content = (
    <>
      <p>BIO CONTENT</p>
    </>
  );

  return <PublicRoute path="/bio" title="bio" content={content} />;
};

export default Bio;
