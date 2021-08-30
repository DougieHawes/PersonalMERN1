import { WORKS_FAILURE, WORKS_SUCCESS } from "./workTypes";

const initialState = {
  works: [],
  work: null,
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case WORKS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case WORKS_SUCCESS:
      return {
        ...state,
        works: payload,
        loading: false,
      };
    default:
      return state;
  }
};
