import { REMOVE_ALERT, SET_ALERT } from "./alertTypes";

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    case SET_ALERT:
      return [...state, payload];
    default:
      return state;
  }
};
