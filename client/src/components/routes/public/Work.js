import { useEffect } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { getWorks } from "../../../redux/work/workActions";

import PublicRoute from "../../utils/routes/PublicRoute";

import WorkCard from "../../utils/WorkCard";

import "./style.min.css";

const Work = ({ getWorks, work: { works } }) => {
  useEffect(() => {
    getWorks();
  }, []);

  const content = (
    <div className="work-grid">
      {works &&
        works.map((i) => (
          <WorkCard
            key={i._id}
            id={i._id}
            img={`${process.env.REACT_APP_API_URL}/work/image/${i._id}`}
            title={i.itemname}
            subtitle={i.subtitle}
            text={i.text}
          />
        ))}
    </div>
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
