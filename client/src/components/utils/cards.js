import { Link } from "react-router-dom";

import "./style.min.css";

export const Card1 = ({ id, date, img, title, subtitle, text }) => (
  <div className="card work-card">
    <Link to={`/work/${id}`}>
      <div className="work-card-image-container">
        <img className="work-card-image" src={img} />{" "}
      </div>
      <div className="work-body">
        <h3 className="work-card-title">{title}</h3>
        <p className="work-card-subtitle">{subtitle}</p>
        <p className="work-card-text">{text}</p>
        <p>{date}</p>
      </div>
    </Link>
  </div>
);

export const Card2 = ({ id, img, title, subtitle, text }) => (
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
  </div>
);
