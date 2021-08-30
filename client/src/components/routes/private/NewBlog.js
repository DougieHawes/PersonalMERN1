import { useState } from "react";
import { Link } from "react-router-dom";

import PrivateRoute from "../../utils/routes/PrivateRoute";

import { Button1 } from "../../utils/buttons";
import { Input1, Input2 } from "../../utils/inputs";

import "./style.min.css";

const NewBlog = () => {
  const [state, setState] = useState({
    btnText: "submit",
  });
  const { btnText } = state;

  const [data, setData] = useState({
    image: "",
    title: "",
    subtitle: "",
    text: "",
  });
  const { image, title, subtitle, text } = data;

  const handleChange = (name) => (e) => {
    setData({ [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  const content = (
    <div className="add-blog">
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
          label="text"
          value={text}
          placeholder="enter text"
          onChange={handleChange("text")}
        />
        <Button1 text={btnText} />
      </form>
    </div>
  );

  return <PrivateRoute path="/new-blog" title="new blog" content={content} />;
};

export default NewBlog;
