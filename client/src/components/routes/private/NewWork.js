import { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import PrivateRoute from "../../utils/routes/PrivateRoute";

import { Button1 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";

import "./style.min.css";

const NewWork = () => {
  const [state, setState] = useState({
    btnText: "submit",
    redirect: false,
  });
  const { btnText, redirect } = state;

  const [data, setData] = useState({
    image: "",
    title: "",
    subtitle: "",
    description: "",
  });
  const { image, title, subtitle, description } = data;

  const handleChange = (name) => (e) => {
    setData({ [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  const content = (
    <div className="add-work">
      <Link to="/dashboard">back to dashboard</Link>
      <form className="form" onSubmit={handleSubmit}>
        <Input1
          label="image"
          type="file"
          value={image}
          onChange={handleChange("image")}
        />
        <Input1
          label="title"
          value={title}
          placeholder="enter title"
          onChange={handleChange("title")}
        />
        <Input1
          label="subtitle"
          value={subtitle}
          placeholder="enter subtitle"
          onChange={handleChange("subtitle")}
        />
        <Input2
          label="description"
          value={description}
          placeholder="enter description"
          onChange={handleChange("description")}
        />
        <Button1 text={btnText} />
      </form>
      {redirect && <Redirect to="/work" />}
    </div>
  );

  return <PrivateRoute path="/new-work" title="new work" content={content} />;
};

export default NewWork;
