import "./style.min.css";

import Navbar from "./components/layout/Navbar";

import Landing from "./components/routes/public/Landing";

import SignIn from "./components/routes/auth/SignIn";

import Dashboard from "./components/routes/private/Dashboard";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <SignIn />
      <Dashboard />
    </div>
  );
};

export default App;
