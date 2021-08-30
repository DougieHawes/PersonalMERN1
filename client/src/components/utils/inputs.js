import "./style.min.css";

export const Input1 = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}) => (
  <div className="input input1">
    <label className="input-label">{label}</label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export const Input2 = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
}) => (
  <div className="input input2">
    <label className="input-label">{label}</label>
    <textarea
      className="text-area"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);
