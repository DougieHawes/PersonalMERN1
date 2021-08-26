import { connect } from "react-redux";
import { Fade } from "react-reveal";

import PropTypes from "prop-types";

import "./style.min.css";

const Alert1 = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Fade>
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    </Fade>
  ));

Alert1.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert1);
