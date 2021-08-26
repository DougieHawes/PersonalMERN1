import { combineReducers } from "redux";

import alertReducer from "./alert/alertReducer";
import authReducer from "./auth/authReducer";

export default combineReducers({ alert: alertReducer, auth: authReducer });
