import { POSTS_FAILURE, POSTS_SUCCESS } from "./blogTypes";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case POSTS_FAILURE:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    default:
      return state;
  }
};
