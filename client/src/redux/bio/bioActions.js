import axios from "axios";

import { setAlert } from "../alert/alertActions";

import { BIO_FAILURE, BIO_SUCCESS } from "./bioTypes";

export const getBio = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/bio`);

    dispatch({
      type: BIO_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: BIO_FAILURE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
