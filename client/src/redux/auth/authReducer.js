import {
  AUTH_FAILURE,
  AUTH_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "./authTypes";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  username: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_FAILURE:
    case LOGIN_FAILURE:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    default:
      return state;
  }
};
