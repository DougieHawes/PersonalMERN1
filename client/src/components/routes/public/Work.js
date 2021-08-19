import PublicRoute from "../../utils/routes/PublicRoute";

import "./style.min.css";

const Work = () => {
  const content = (
    <>
      <p>WORK CONTENT</p>
    </>
  );

  return <PublicRoute path="/work" title="work" content={content} />;
};

export default Work;
