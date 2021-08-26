import { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import PropTypes from "prop-types";

import { setAlert } from "../../../redux/alert/alertActions";
import { signIn } from "../../../redux/auth/authActions";

import AuthRoute from "../../utils/routes/AuthRoute";

import { Input1 } from "../../utils/inputs";
import { Button1 } from "../../utils/buttons";

import "./style.min.css";

const SignIn = ({ setAlert, signIn }) => {
  const [state, setState] = useState({
    btnText: "submit",
  });
  const { btnText } = state;

  const [form, setForm] = useState({
    email: "elliotalderson@fsociety.net",
    password: "Qwerty42",
  });
  const { email, password } = form;

  const handleChange = (name) => (e) =>
    setForm({ ...form, [name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setAlert("please fill in both fields", "warning");
    }

    signIn(email, password);
  };

  const content = (
    <form onSubmit={handleSubmit}>
      <Input1 value={email} onChange={handleChange("email")} />
      <Input1
        type="password"
        value={password}
        onChange={handleChange("password")}
      />
      <Button1 text={btnText} />
    </form>
  );

  return <AuthRoute path="/secret" title="sign-in" content={content} />;
};

SignIn.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, signIn })(SignIn);
