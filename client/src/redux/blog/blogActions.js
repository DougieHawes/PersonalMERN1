import axios from "axios";

import { setAlert } from "../alert/alertActions";

import { POSTS_FAILURE, POSTS_SUCCESS } from "./blogTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/blog`);

    dispatch({
      type: POSTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POSTS_FAILURE,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
