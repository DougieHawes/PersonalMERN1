import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import PrivateRoute from "../../utils/routes/PrivateRoute";

import { Button1 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";

import "./style.min.css";

const EditBio = () => {
  const [state, setState] = useState({
    btnText: "submit",
    redirect: false,
  });
  const { btnText, redirect } = state;

  const [data, setData] = useState({
    avatar: "",
    quote: "",
  });
  const { avatar, quote } = data;

  const handleChange = (name) => (e) => {
    setData({ [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  const content = (
    <div className="edit-bio">
      <Link to="/dashboard">back to dashboard</Link>
      <form className="form" onSubmit={handleSubmit}>
        <Input1
          label="avatar"
          type="file"
          value={avatar}
          onChange={handleChange("avatar")}
        />
        <Input1
          label="quote"
          value={quote}
          placeholder="enter quote"
          onChange={handleChange("quote")}
        />
        <Button1 text={btnText} />
      </form>
      {redirect && <Redirect to="/bio" />}
    </div>
  );

  return <PrivateRoute path="/edit-bio" title="edit bio" content={content} />;
};

export default EditBio;
