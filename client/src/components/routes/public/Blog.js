import { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { getPosts } from "../../../redux/blog/blogActions";

import PublicRoute from "../../utils/routes/PublicRoute";

import "./style.min.css";

const Blog = ({ getPosts, blog: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, []);

  const content = (
    <>
      <p>BLOG CONTENT</p>
      {posts &&
        posts.map((i) => (
          <div key={i._id}>
            <div>{i.title}</div>
            <div>{i.subtitle}</div>
            <div>{i.text}</div>
          </div>
        ))}
    </>
  );

  return <PublicRoute path="/blog" title="blog" content={content} />;
};

Blog.propTypes = {
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  blog: state.blog,
});

export default connect(mapStateToProps, { getPosts })(Blog);
