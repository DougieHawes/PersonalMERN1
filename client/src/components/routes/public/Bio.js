import { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { getBio } from "../../../redux/bio/bioActions";

import PublicRoute from "../../utils/routes/PublicRoute";

import { Item1 } from "../../utils/items";

import "./style.min.css";

const Bio = ({ getBio, bio: { bio } }) => {
  useEffect(() => {
    getBio();
  }, []);

  const content = (
    <div className="bio">
      {bio &&
        bio.map((i) => (
          <div key={i._id}>
            {i.quote && (
              <>
                <div className="bio-header">
                  <div className="bio-header-text">
                    <Item1 label="age" value={i.age} />
                    <Item1 label="location" value={i.location} />
                    <Item1 label="quote" value={i.quote} />
                  </div>
                  <img
                    className="bio-header-image"
                    src={`${process.env.REACT_APP_API_URL}/bio/image/${i._id}`}
                    alt={i.itemname}
                  />
                </div>
                <div className="bio-body">
                  <h4 className="bio-body-title">about me</h4>
                  <p className="bio-body-text">{i.about}</p>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );

  return <PublicRoute path="/bio" title="bio" content={content} />;
};

Bio.propTypes = {
  getBio: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bio: state.bio,
});

export default connect(mapStateToProps, { getBio })(Bio);
