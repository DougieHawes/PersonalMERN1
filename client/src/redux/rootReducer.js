import { combineReducers } from "redux";

import alertReducer from "./alert/alertReducer";
import authReducer from "./auth/authReducer";
import bioReducer from "./bio/bioReducer";
import blogReducer from "./blog/blogReducer";
import workReducer from "./work/workReducer";

export default combineReducers({
  alert: alertReducer,
  auth: authReducer,
  bio: bioReducer,
  blog: blogReducer,
  work: workReducer,
});
