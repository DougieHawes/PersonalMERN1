import "./style.min.css";

export const Input1 = ({ type = "text", value, placeholder, onChange }) => (
  <input
    className="input input1"
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);
