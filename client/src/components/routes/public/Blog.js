import PublicRoute from "../../utils/routes/PublicRoute";

import "./style.min.css";

const Blog = () => {
  const content = (
    <>
      <p>BLOG CONTENT</p>
    </>
  );

  return <PublicRoute path="/blog" title="blog" content={content} />;
};

export default Blog;
