import { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { getWorks } from "../../../redux/work/workActions";

import PublicRoute from "../../utils/routes/PublicRoute";

import "./style.min.css";

const Work = ({ getWorks, work: { works } }) => {
  useEffect(() => {
    getWorks();
  }, []);

  const content = (
    <>
      <p>WORK CONTENT</p>
      {works &&
        works.map((i) => (
          <div key={i._id}>
            <div>{i.title}</div>
            <div>{i.subtitle}</div>
            <div>{i.text}</div>
          </div>
        ))}
    </>
  );

  return <PublicRoute path="/work" title="work" content={content} />;
};

Work.propTypes = {
  getWorks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  work: state.work,
});

export default connect(mapStateToProps, { getWorks })(Work);
