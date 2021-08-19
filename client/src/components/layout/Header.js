import { Link } from "react-router-dom";

import "./style.min.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header-title">PersonalMERN#1</h1>
      </Link>
    </header>
  );
};

export default Header;
