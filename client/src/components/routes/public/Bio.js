import { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { getBio } from "../../../redux/bio/bioActions";

import PublicRoute from "../../utils/routes/PublicRoute";

import "./style.min.css";

const Bio = ({ getBio, bio: { bio } }) => {
  useEffect(() => {
    getBio();
  }, []);

  const content = (
    <div className="bio">
      <p>About me</p>
      <div className="bio-item">
        <p className="bio-item-key">quote</p>
        <p className="bio-item-value">{bio ? bio.quote : ""}</p>
      </div>
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
