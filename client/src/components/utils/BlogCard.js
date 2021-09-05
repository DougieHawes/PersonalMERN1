import { useState } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./style.min.css";

const BlogCard = ({ isAuthenticated, id, img, title, subtitle, text }) => {
  const [remove, showRemove] = useState(false);

  return (
    <div className="card blog-card">
      <Link to={`/blog/${id}`}>
        <div className="blog-card-image-container">
          <img className="blog-card-image" src={img} />
        </div>
        <div className="blog-body">
          <h3 className="blog-card-title">{title}</h3>
          <p className="blog-card-subtitle">{subtitle}</p>
          <p className="blog-card-text">{text}</p>
        </div>
      </Link>
      {isAuthenticated && (
        <div className="buttons">
          <div className="edit-button">
            <Link to={`/work/edit/${id}`}>
              <i className="fas fa-edit"></i>
            </Link>
          </div>
          <div className="delete-button" onClick={() => showRemove(true)}>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      )}
      {remove && (
        <div className="delete-options">
          <p className="delete-option-info">
            Are you sure you want to delete this item?
          </p>
          <div className="delete-option" onClick={() => showRemove(false)}>
            YES
          </div>
          <div className="delete-option" onClick={() => showRemove(false)}>
            NO
          </div>
        </div>
      )}
    </div>
  );
};

BlogCard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(BlogCard);
