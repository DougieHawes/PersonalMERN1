import { useState } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import "./style.min.css";

const WorkCard = ({
  isAuthenticated,
  id,
  date,
  img,
  title,
  subtitle,
  text,
}) => {
  const [remove, showRemove] = useState(false);

  return (
    <div className="card work-card">
      <div className="work-card-image-container">
        <Link to={`/work/${id}`}>
          <img className="work-card-image" src={img} />
        </Link>
      </div>
      <div className="work-body">
        <h3 className="work-card-title">{title}</h3>
        <p className="work-card-subtitle">{subtitle}</p>
        <p className="work-card-text">{text}</p>
        <p>{date}</p>
      </div>
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

WorkCard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(WorkCard);
