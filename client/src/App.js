import { useEffect } from "react";
import { Provider } from "react-redux";

import "./style.min.css";

import setAuthToken from "./utils/setAuthToken";

import { loadUser } from "./redux/auth/authActions";

import store from "./redux/store";

import Header from "./components/layout/Header";

import Bio from "./components/routes/public/Bio";
import Blog from "./components/routes/public/Blog";
import Landing from "./components/routes/public/Landing";
import Work from "./components/routes/public/Work";

import SignIn from "./components/routes/auth/SignIn";

import Dashboard from "./components/routes/private/Dashboard";
import EditBio from "./components/routes/private/EditBio";
import NewBlog from "./components/routes/private/NewBlog";
import NewWork from "./components/routes/private/NewWork";

import Alert from "./components/utils/alerts/Alert1";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        {/* public routes */}
        <Landing />
        <Blog />
        <Bio />
        <Work />
        {/* auth routes */}
        <SignIn />
        {/* private routes */}
        <Dashboard />
        <EditBio />
        <NewBlog />
        <NewWork />
        {/* alert component */}
        <Alert />
      </div>{" "}
    </Provider>
  );
};

export default App;
