import { useState } from "react";

import PublicRoute from "../../utils/routes/PublicRoute";

import { Input1 } from "../../utils/inputs";
import { Button1 } from "../../utils/buttons";

const SignIn = () => {
  const [state, setState] = useState({
    btnText: "submit",
  });
  const { btnText } = state;

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const handleChange = (name) => (e) =>
    setForm({ ...form, [name]: e.target.value });

  const content = (
    <form>
      <Input1 value={email} onChange={handleChange("email")} />
      <Input1
        type="password"
        value={password}
        onChange={handleChange("password")}
      />
      <Button1 text={btnText} />
    </form>
  );

  return <PublicRoute path="/secret" title="sign-in" content={content} />;
};

export default SignIn;
