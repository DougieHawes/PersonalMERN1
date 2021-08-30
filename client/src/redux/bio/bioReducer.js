import { BIO_FAILURE, BIO_SUCCESS } from "./bioTypes";

const initialState = {
  bio: null,
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case BIO_FAILURE:
      return { ...state, error: payload, loading: false };
    case BIO_SUCCESS:
      return { ...state, bio: payload, loading: false };
    default:
      return state;
  }
};
