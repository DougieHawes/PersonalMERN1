import axios from "axios";

import { setAlert } from "../alert/alertActions";

import { WORKS_FAILURE, WORKS_SUCCESS } from "./workTypes";

export const getWorks = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/work`);

    dispatch({
      type: WORKS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: WORKS_FAILURE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
