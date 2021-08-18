export const Input1 = ({ type = "text", value, placeholder, onChange }) => (
  <input
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);
