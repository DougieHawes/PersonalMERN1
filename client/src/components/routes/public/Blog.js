import { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { getPosts } from "../../../redux/blog/blogActions";

import { Card2 } from "../../utils/cards";

import PublicRoute from "../../utils/routes/PublicRoute";

import "./style.min.css";

const Blog = ({ getPosts, blog: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, []);

  const content = (
    <div className="work-grid">
      {posts &&
        posts.map((i) => (
          <Card2
            key={i._id}
            id={i._id}
            date={i.date}
            img={`${process.env.REACT_APP_API_URL}/blog/image/${i._id}`}
            title={i.title}
            subtitle={i.subtitle}
            text={i.text}
          />
        ))}
    </div>
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
