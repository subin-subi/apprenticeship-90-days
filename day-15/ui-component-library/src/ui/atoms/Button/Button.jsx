import "./button.css";
import { classNames } from "../../../utils/classNames";

function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick
}) {
  return (
    <button
      className={classNames("btn", variant, size)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
