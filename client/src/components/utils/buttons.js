export const Button1 = ({ type = "submit", text }) => (
  <button className="button" type={type}>
    {text}
  </button>
);
